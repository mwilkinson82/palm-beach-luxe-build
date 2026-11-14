import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const dist = path.join(root, "dist");
const templatePath = path.join(dist, "index.html");
const template = fs.readFileSync(templatePath, "utf8");
const serverEntry = path.join(root, "dist-ssr", "entry-server.js");

const { render, PUBLIC_PATHS } = await import(pathToFileURL(serverEntry).href);

function inject(html, head) {
  const start = "<!--seo-defaults-->";
  const end = "<!--/seo-defaults-->";
  const startAt = template.indexOf(start);
  const endAt = template.indexOf(end);
  if (startAt === -1 || endAt === -1) {
    throw new Error("index.html is missing seo-defaults markers");
  }
  let page = template.slice(0, startAt) + template.slice(endAt + end.length);
  if (!page.includes("<!--app-head-->")) {
    throw new Error("index.html is missing the app-head marker");
  }
  page = page.replace("<!--app-head-->", head);
  const rootTag = '<div id="root"></div>';
  if (!page.includes(rootTag)) {
    throw new Error("index.html is missing <div id=\"root\"></div>");
  }
  return page.replace(
    rootTag,
    `<div id="root" data-prerendered="true">${html}</div>`,
  );
}

function writeRoute(route, page) {
  if (route === "/") {
    const file = path.join(dist, "index.html");
    fs.writeFileSync(file, page);
    return [file];
  }
  const name = route.replace(/^\//, "");
  const htmlFile = path.join(dist, `${name}.html`);
  const indexFile = path.join(dist, name, "index.html");
  fs.mkdirSync(path.dirname(indexFile), { recursive: true });
  fs.writeFileSync(htmlFile, page);
  fs.writeFileSync(indexFile, page);
  return [htmlFile, indexFile];
}

const files = [];
for (const route of PUBLIC_PATHS) {
  const { html, head } = render(route);
  if (!html || html.length < 500) {
    throw new Error(`Render for ${route} was empty (${html?.length || 0} chars)`);
  }
  if (!head.includes("<title")) throw new Error(`No <title> for ${route}`);
  if (!head.includes("application/ld+json")) throw new Error(`No JSON-LD for ${route}`);
  files.push(...writeRoute(route, inject(html, head)));
  console.log(`prerendered ${route} (${html.length} chars of HTML)`);
}

const notFound = render("/404-preview");
const notFoundFile = path.join(dist, "404.html");
fs.writeFileSync(notFoundFile, inject(notFound.html, notFound.head));
files.push(notFoundFile);
console.log("prerendered /404.html");

function jsonLdBlocks(html) {
  const blocks = [];
  const re = /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g;
  let match = re.exec(html);
  while (match) {
    blocks.push(JSON.parse(match[1]));
    match = re.exec(html);
  }
  return blocks;
}

function walk(node, visit) {
  if (!node || typeof node !== "object") return;
  if (Array.isArray(node)) {
    node.forEach((item) => walk(item, visit));
    return;
  }
  visit(node);
  Object.values(node).forEach((value) => walk(value, visit));
}

function typesOf(node) {
  const value = node["@type"];
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function assertFile(file, { must = [], mustNot = [], h1 = 1, types = [] }) {
  const html = fs.readFileSync(file, "utf8");
  for (const needle of must) {
    if (!html.includes(needle)) throw new Error(`${path.relative(root, file)} missing: ${needle}`);
  }
  for (const needle of mustNot) {
    if (html.includes(needle)) throw new Error(`${path.relative(root, file)} should not contain: ${needle}`);
  }
  const h1Count = [...html.matchAll(/<h1\b/g)].length;
  if (h1Count !== h1) {
    throw new Error(`${path.relative(root, file)} has ${h1Count} <h1> tags, expected ${h1}`);
  }
  const blocks = jsonLdBlocks(html);
  if (blocks.length === 0) throw new Error(`${file} has no JSON-LD`);
  const found = new Set();
  for (const block of blocks) {
    if (block["@context"] !== "https://schema.org") {
      throw new Error(`${file} JSON-LD @context is ${block["@context"]}`);
    }
    const serialized = JSON.stringify(block);
    if (serialized.includes("aggregateRating") || serialized.includes("reviewCount")) {
      throw new Error(`${file} JSON-LD still publishes a review aggregate`);
    }
    if (serialized.includes('"1994"') || /1994/.test(serialized)) {
      throw new Error(`${file} JSON-LD still publishes 1994`);
    }
    if (!serialized.includes('"foundingDate":"2015"')) {
      throw new Error(`${file} JSON-LD is missing foundingDate 2015`);
    }
    const visible = html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/https?:\/\/[^\s"'<>]+/g, " ")
      .replace(/\/__l5e\/[^\s"'<>]+/g, " ")
      .replace(/<[^>]+>/g, " ");
    if (visible.includes("1994")) {
      throw new Error(`${file} still says 1994`);
    }
    if (/30 years of beau monde/i.test(visible)) {
      throw new Error(`${file} still says 30 years of Beau Monde`);
    }
    walk(block, (node) => {
      typesOf(node).forEach((type) => found.add(type));
      if (typesOf(node).includes("PostalAddress") && node.streetAddress?.includes("205 Worth")) {
        if (node.addressLocality !== "Palm Beach" || node.addressRegion !== "FL") {
          throw new Error(`${file} Palm Beach address is incomplete`);
        }
      }
      if (typesOf(node).includes("Person") && node.name === "AJ Hoover") {
        const credential = JSON.stringify(node.hasCredential || {});
        if (!credential.includes("CBC1260651")) {
          throw new Error(`${file} Person schema is missing license CBC1260651`);
        }
        if (!credential.includes("Florida Certified Master Builder")) {
          throw new Error(`${file} Person schema is missing Florida Certified Master Builder`);
        }
        if (!credential.includes("NAHB Certified Master Building Professional")) {
          throw new Error(`${file} Person schema is missing NAHB CMBP`);
        }
      }
    });
  }
  for (const type of types) {
    if (!found.has(type)) throw new Error(`${file} JSON-LD missing @type ${type}`);
  }
  return html;
}

const home = path.join(dist, "index.html");
const about = path.join(dist, "about", "index.html");
const renovations = path.join(dist, "renovations", "index.html");

assertFile(home, {
  must: [
    "Beau Monde Builders — Custom Luxury Home Builder in Palm Beach",
    "205 Worth Avenue",
    "(561) 646-8992",
    "Who builds custom homes in Palm Beach?",
    "What does a Palm Beach renovation involve?",
    "50+ reviews across",
    "instagram.com/bmbbuilders",
    'rel="canonical" href="https://bmbpalmbeach.com/"',
    'property="og:title"',
    'name="twitter:card"',
    "CBC1260651",
    "1129 Rockledge Blvd",
  ],
  mustNot: [
    "aggregateRating",
    "reviewCount",
    "instagram.com/beaumondebuilders",
    "linkedin.com/company/beaumondebuilders",
    "youtube.com/@beaumondebuilders",
    "$150M",
    "$5M",
    "25+",
    "Years Excellence",
    "Project Value",
    "Estate Homes",
  ],
  types: [
    "HomeAndConstructionBusiness",
    "GeneralContractor",
    "Organization",
    "Person",
    "WebSite",
    "WebPage",
    "FAQPage",
    "Service",
    "BreadcrumbList",
  ],
});

assertFile(path.join(dist, "projects", "index.html"), {
  must: ["Find Your Style.", "Oceanfront", "Mediterranean", 'rel="canonical" href="https://bmbpalmbeach.com/projects"'],
  types: ["ItemList", "CollectionPage", "Person"],
});

assertFile(about, {
  must: [
    "AJ Hoover",
    "CBC1260651",
    'rel="canonical" href="https://bmbpalmbeach.com/about"',
    "application/ld+json",
  ],
  types: ["Person", "AboutPage", "HomeAndConstructionBusiness"],
});

assertFile(renovations, {
  must: [
    "What does a Palm Beach renovation involve?",
    "Palm Beach Island",
    "Reimagine",
    'rel="canonical" href="https://bmbpalmbeach.com/renovations"',
  ],
  types: ["FAQPage", "Service", "WebPage"],
});

assertFile(path.join(dist, "404.html"), {
  must: ["noindex"],
  h1: 1,
  types: ["HomeAndConstructionBusiness", "Person"],
});

const homeHtml = fs.readFileSync(home, "utf8");
const assetRefs = [...homeHtml.matchAll(/\s(?:src|href)="(\/assets\/[^"]+)"/g)].map((match) => match[1]);
const uniqueAssets = [...new Set(assetRefs)];
const missing = uniqueAssets.filter((asset) => !fs.existsSync(path.join(dist, asset)));
if (missing.length) {
  throw new Error(`Prerendered asset URLs are not in dist:\n${missing.join("\n")}`);
}

console.log(`verified home, about, renovations, and 404 (${uniqueAssets.length} local assets on the home page)`);
