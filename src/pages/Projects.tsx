import { forwardRef, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import HTMLFlipBook from "react-pageflip";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SEO, BreadcrumbSchema } from "@/components/SEO";
import { Helmet } from "react-helmet-async";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import oceanfront from "@/assets/projects/oceanfront.jpg.asset.json";
import urbanClassical from "@/assets/projects/urban-classical.jpg.asset.json";
import waterfrontContemporary from "@/assets/projects/waterfront-contemporary.jpg.asset.json";
import mediterranean from "@/assets/projects/mediterranean.jpg.asset.json";
import modernCoastal from "@/assets/projects/modern-coastal.jpg.asset.json";
import traditionalEstate from "@/assets/projects/traditional-estate.jpg.asset.json";
import bermudaColonial from "@/assets/projects/bermuda-colonial.jpg.asset.json";
import angloCaribbean from "@/assets/projects/anglo-caribbean.jpg.asset.json";
import transitional from "@/assets/projects/transitional.jpg.asset.json";
import regencyGeorgian from "@/assets/projects/regency-georgian.jpg.asset.json";

type Style = {
  name: string;
  descriptor: string;
  image?: string;
};

const STYLES: Style[] = [
  {
    name: "Oceanfront",
    descriptor:
      "Sun-bleached limestone, deep verandas, and the quiet authority of a house built to outlast the salt.",
    image: oceanfront.url,
  },
  {
    name: "Urban Classical",
    descriptor:
      "Palm Beach gentility in town clothes — symmetry, scaled cornices, and rooms that know how to host.",
    image: urbanClassical.url,
  },
  {
    name: "Waterfront Contemporary",
    descriptor:
      "Glass framed in pale stone, set lightly against the Intracoastal, scaled for the boat at the dock.",
    image: waterfrontContemporary.url,
  },
  {
    name: "Mediterranean",
    descriptor:
      "Tile, terracotta, and shaded loggias — the old island idiom done with restraint and proportion.",
    image: mediterranean.url,
  },
  {
    name: "Modern Coastal",
    descriptor:
      "Quiet lines, ivory walls, and rooms that hand the view over to the water without competing.",
    image: modernCoastal.url,
  },
  {
    name: "Traditional Estate",
    descriptor:
      "Hipped roofs, hand-set masonry, deep eaves — the kind of house that reads as inherited from the first day.",
    image: traditionalEstate.url,
  },
  {
    name: "Bermuda / British Colonial",
    descriptor:
      "White stucco, hipped tile, louvered shutters, deep verandas — the island idiom done with proportion and restraint.",
    image: bermudaColonial.url,
  },
  {
    name: "Anglo-Caribbean / West Indies",
    descriptor:
      "Pecky cypress, coral stone, plantation shutters — a quieter, more breeze-cooled coastal language.",
    image: angloCaribbean.url,
  },
  {
    name: "Transitional",
    descriptor:
      "Traditional bones, modern interiors — the way most Palm Beach houses live today.",
    image: transitional.url,
  },
  {
    name: "Regency / Georgian",
    descriptor:
      "Symmetry, fanlights, refined townhouse vocabulary in the Mizner lineage.",
    image: regencyGeorgian.url,
  },
];

const TOTAL = STYLES.length + 1; // +1 for the "Yours." closer

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Beau Monde Builders — Style Studies",
  description:
    "Ten design idioms — from Oceanfront to Regency — that shape Beau Monde's bespoke Palm Beach residences.",
  itemListElement: STYLES.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Thing",
      name: s.name,
      description: s.descriptor,
    },
  })),
};

// ---------- Reveal variants ----------

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};
const fadeImg = {
  hidden: { opacity: 0, scale: 1.04 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.95, ease: EASE } },
};
const drawX = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.6, ease: EASE } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.18 } },
};

// ---------- Page wrapper (forwardRef for react-pageflip) ----------

type PageProps = {
  children: React.ReactNode;
  visible: boolean;
  hardCover?: boolean;
};

const Page = forwardRef<HTMLDivElement, PageProps>(
  ({ children, visible, hardCover }, ref) => (
    <div
      ref={ref}
      className="bg-background overflow-hidden w-full h-full"
      data-density={hardCover ? "hard" : "soft"}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={visible ? "show" : "hidden"}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  )
);
Page.displayName = "Page";

// ---------- Plate compositions ----------

const CoverPlate = () => (
  <div className="w-full h-full flex flex-col items-center justify-center text-center px-8 sm:px-12 py-12 bg-card border border-accent/30">
    <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
      <span className="h-px w-8 bg-accent" />
      <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent">
        How to read this book
      </span>
      <span className="h-px w-8 bg-accent" />
    </motion.div>
    <motion.h1
      variants={fadeUp}
      className="font-display italic font-light text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight"
    >
      Find Your Style.
    </motion.h1>
    <motion.span variants={drawX} className="block w-16 h-px bg-accent mt-8 mb-8 origin-center" />
    <motion.p
      variants={fadeUp}
      className="font-sans font-light text-sm md:text-base text-primary/75 leading-relaxed max-w-md"
    >
      Ten aesthetic worlds we know intimately — and one that's yours alone.
      Turn the page to begin.
    </motion.p>
    <motion.p
      variants={fadeUp}
      className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent mt-12"
    >
      Turn →
    </motion.p>
  </div>
);

// ---------- Front cover (left page on landing) ----------
// "Closed Volume" — seafoam ground, Beau Monde wordmark in lieu of a monogram.
const FrontCover = () => (
  <div
    className="w-full h-full flex flex-col items-center justify-between px-8 sm:px-14 py-12 sm:py-16 text-center border border-accent/30"
    style={{
      background:
        "linear-gradient(135deg, hsl(160 18% 88%) 0%, hsl(160 18% 88%) 55%, hsl(160 16% 82%) 100%)",
    }}
  >
    <motion.p
      variants={fadeUp}
      className="font-sans text-[10px] tracking-[0.5em] uppercase text-accent"
    >
      Beau Monde · Palm Beach
    </motion.p>

    <div className="flex flex-col items-center gap-8">
      <motion.div variants={fadeImg} className="flex flex-col items-center gap-5">
        <h2 className="font-wordmark text-primary text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight">
          Beau Monde
        </h2>
        <motion.p
          variants={fadeUp}
          className="font-display italic font-light text-primary text-2xl sm:text-3xl md:text-4xl leading-[1] mt-2"
        >
          The Style Book
        </motion.p>
      </motion.div>

      <motion.span variants={drawX} className="block w-16 h-px bg-accent origin-center" />

    </div>

    <motion.div
      variants={fadeUp}
      className="flex items-center justify-between w-full font-sans text-[9px] tracking-[0.4em] uppercase text-accent/70"
    >
      <span>Volume I</span>
      <span>MMXXVI</span>
    </motion.div>
  </div>
);

const ImageLoupe = ({
  src,
  alt,
  eager,
}: {
  src: string;
  alt: string;
  eager?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lensRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);
  const reduceMotion = useReducedMotion();

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    const lens = lensRef.current;
    if (!el || !lens) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const lensSize = lens.offsetWidth;
    const half = lensSize / 2;
    // clamp lens within image
    const lx = Math.max(half, Math.min(rect.width - half, x));
    const ly = Math.max(half, Math.min(rect.height - half, y));
    lens.style.left = `${lx - half}px`;
    lens.style.top = `${ly - half}px`;
    // background-position for 2x zoom: percentage based on cursor relative position
    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;
    lens.style.backgroundPosition = `${px}% ${py}%`;
    lens.style.backgroundSize = `${rect.width * 2}px ${rect.height * 2}px`;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden [@media(hover:hover)]:cursor-zoom-in"
      onMouseEnter={() => !reduceMotion && setActive(true)}
      onMouseLeave={() => setActive(false)}
      onMouseMove={handleMove}
    >
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className="w-full h-full object-cover select-none pointer-events-none"
        draggable={false}
      />
      <div
        ref={lensRef}
        aria-hidden
        className="hidden [@media(hover:hover)]:block absolute pointer-events-none rounded-full border border-background/80 shadow-[0_18px_40px_-12px_hsl(var(--primary)/0.55)] bg-no-repeat transition-opacity duration-200"
        style={{
          width: 160,
          height: 160,
          opacity: active ? 1 : 0,
          backgroundImage: `url(${src})`,
        }}
      />
    </div>
  );
};

const StylePlate = ({ s, index }: { s: Style; index: number }) => (
  <div className="w-full h-full flex flex-col p-5 sm:p-8 lg:p-10">
    <motion.p
      variants={fadeUp}
      className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent"
    >
      {String(index + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
    </motion.p>
    <motion.div
      variants={fadeImg}
      className="mt-4 sm:mt-6 aspect-[16/11] overflow-hidden shadow-[0_24px_60px_-30px_hsl(var(--primary)/0.4)]"
    >
      {s.image ? (
        <ImageLoupe src={s.image} alt={s.name} eager={index < 2} />
      ) : (
        <div className="w-full h-full bg-card border border-accent/30 flex items-center justify-center">
          <span className="font-display italic font-light text-primary/40 text-2xl">
            {s.name}
          </span>
        </div>
      )}
    </motion.div>
    <motion.h2
      variants={fadeUp}
      className="font-display italic font-light text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.05] mt-5 sm:mt-6"
    >
      {s.name}
    </motion.h2>
    <motion.span
      variants={drawX}
      className="block w-14 h-px bg-accent mt-3 sm:mt-4 origin-left"
    />
    <motion.p
      variants={fadeUp}
      className="font-sans font-light text-[13px] sm:text-sm md:text-base text-primary/75 leading-relaxed mt-3 sm:mt-4 max-w-md"
    >
      {s.descriptor}
    </motion.p>
    <motion.div variants={fadeUp} className="mt-auto pt-5 sm:pt-6">
      <Link
        to={`/contact?style=${slugify(s.name)}`}
        className="group inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.3em] uppercase text-accent"
      >
        <span className="relative">
          Talk to Beau Monde about this style
          <span className="absolute left-0 -bottom-1 h-px w-full bg-accent origin-right scale-x-0 transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
        </span>
        <span aria-hidden>⟶</span>
      </Link>
    </motion.div>
  </div>
);

const YoursPlate = ({ onRestart }: { onRestart: () => void }) => (
  <div className="w-full h-full flex flex-col items-center justify-center text-center px-6 sm:px-10 py-10 bg-card">
    <motion.p
      variants={fadeUp}
      className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent mb-8"
    >
      {String(TOTAL).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")} — One of One
    </motion.p>
    <motion.span variants={drawX} className="block w-full h-px bg-accent origin-center" />
    <div className="py-10 sm:py-14">
      <motion.h2
        variants={fadeUp}
        className="font-display italic font-light text-primary text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none"
      >
        Yours.
      </motion.h2>
      <motion.span
        variants={drawX}
        className="block w-16 h-px bg-accent mx-auto my-8 origin-center"
      />
      <motion.p
        variants={fadeUp}
        className="font-sans font-light text-sm md:text-base text-primary/75 leading-relaxed max-w-md mx-auto"
      >
        If none of these is quite it, that's the point. The most memorable Beau
        Monde houses begin with a vision no catalogue could hold.
      </motion.p>
      <motion.div variants={fadeUp} className="mt-10">
        <Button asChild size="lg" className="px-10">
          <Link to="/contact">Talk to Beau Monde</Link>
        </Button>
      </motion.div>
      <motion.button
        variants={fadeUp}
        onClick={onRestart}
        className="group mt-6 inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.3em] uppercase text-accent"
      >
        <span aria-hidden>←</span>
        <span className="relative">
          Browse your styles
          <span className="absolute left-0 -bottom-1 h-px w-full bg-accent origin-right scale-x-0 transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100" />
        </span>
      </motion.button>
    </div>
    <motion.span variants={drawX} className="block w-full h-px bg-accent origin-center" />
  </div>
);

// ---------- Back cover: Begin the Conversation inquiry form ----------

const STYLE_OPTIONS = [
  ...STYLES.map((s) => s.name),
  "Yours — something entirely new",
];

const inquirySchema = z.object({
  style: z.string().min(1, "Choose a style"),
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().max(40).optional(),
  note: z.string().trim().max(600).optional(),
});

const InquiryPlate = ({ defaultStyle }: { defaultStyle?: string }) => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    style: defaultStyle ?? STYLE_OPTIONS[0],
    name: "",
    email: "",
    phone: "",
    note: "",
  });

  // Keep selected style in sync with the page the visitor last lingered on,
  // unless they've already touched the select themselves.
  const styleTouched = useRef(false);
  useEffect(() => {
    if (!styleTouched.current && defaultStyle) {
      setForm((f) => ({ ...f, style: defaultStyle }));
    }
  }, [defaultStyle]);

  const shouldProtectField = (target: EventTarget | null) =>
    target instanceof HTMLElement && Boolean(target.closest("input, textarea"));

  const stopFieldGesture = (event: { target: EventTarget | null; stopPropagation: () => void }) => {
    if (shouldProtectField(event.target)) event.stopPropagation();
  };

  useEffect(() => {
    const node = formRef.current;
    if (!node) return;

    const stopBookGesture = (event: Event) => stopFieldGesture(event);
    const events = ["mousedown", "touchstart", "pointerdown", "click"] as const;
    events.forEach((eventName) => node.addEventListener(eventName, stopBookGesture));

    return () => {
      events.forEach((eventName) => node.removeEventListener(eventName, stopBookGesture));
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = inquirySchema.safeParse(form);
    if (!parsed.success) {
      const first = Object.values(parsed.error.flatten().fieldErrors)[0]?.[0];
      toast({
        title: "Please review",
        description: first ?? "Some fields need attention.",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    try {
      const { error: notifyError } = await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "style-book-notification",
          idempotencyKey: `style-notify-${Date.now()}-${parsed.data.email}`,
          templateData: {
            fullName: parsed.data.name,
            email: parsed.data.email,
            phone: parsed.data.phone,
            style: parsed.data.style,
            message: parsed.data.note,
          },
        },
      });
      if (notifyError) throw notifyError;

      const { error: confirmError } = await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "style-book-confirmation",
          recipientEmail: parsed.data.email,
          idempotencyKey: `style-confirm-${Date.now()}-${parsed.data.email}`,
          templateData: {
            firstName: parsed.data.name?.split(" ")[0] ?? parsed.data.name,
            style: parsed.data.style,
          },
        },
      });
      if (confirmError) throw confirmError;
      toast({
        title: "Sent to Beau Monde",
        description: "We'll be in touch within 24 hours.",
      });
      setForm({
        style: defaultStyle ?? STYLE_OPTIONS[0],
        name: "",
        email: "",
        phone: "",
        note: "",
      });
      styleTouched.current = false;
    } catch (err) {
      console.error("Style Book inquiry failed:", err);
      toast({
        title: "Something went wrong",
        description: "Please try again or call (561) 646-8992.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="w-full h-full flex flex-col items-stretch justify-between px-7 sm:px-10 py-8 sm:py-10 text-center border border-accent/30 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(160 18% 88%) 0%, hsl(160 18% 88%) 55%, hsl(160 16% 82%) 100%)",
      }}
    >
      <motion.p
        variants={fadeUp}
        className="font-sans text-[10px] tracking-[0.5em] uppercase text-accent"
      >
        Beau Monde · Palm Beach
      </motion.p>

      <motion.div variants={fadeImg} className="flex flex-col items-center gap-2 mt-2">
        <h2 className="font-wordmark text-primary text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight">
          Beau Monde
        </h2>
        <p className="font-display italic font-light text-primary text-xl sm:text-2xl md:text-3xl leading-none mt-1">
          Begin the conversation.
        </p>
      </motion.div>

      <motion.span variants={drawX} className="block w-16 h-px bg-accent mx-auto origin-center" />

      <motion.form
        ref={formRef}
        variants={fadeUp}
        onSubmit={handleSubmit}
        onMouseDown={stopFieldGesture}
        onTouchStart={stopFieldGesture}
        onPointerDown={stopFieldGesture}
        onClick={stopFieldGesture}
        className="flex-1 flex flex-col gap-3 text-left mx-auto w-full max-w-sm"
      >
        <div>
          <Label htmlFor="inq-style" className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent">
            Style of interest
          </Label>
          <Select
            value={form.style}
            onValueChange={(v) => {
              styleTouched.current = true;
              setForm((f) => ({ ...f, style: v }));
            }}
          >
            <SelectTrigger id="inq-style" className="mt-1 bg-background/70 border-accent/40 rounded-none font-sans text-sm text-primary">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="max-h-72">
              {STYLE_OPTIONS.map((name) => (
                <SelectItem key={name} value={name} className="font-sans text-sm">
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="inq-name" className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent">
            Name
          </Label>
          <Input
            id="inq-name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            required
            maxLength={100}
            className="mt-1 bg-background/70 border-accent/40 rounded-none font-sans text-sm"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="inq-email" className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent">
              Email
            </Label>
            <Input
              id="inq-email"
              type="email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              required
              maxLength={255}
              className="mt-1 bg-background/70 border-accent/40 rounded-none font-sans text-sm"
            />
          </div>
          <div>
            <Label htmlFor="inq-phone" className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent">
              Phone
            </Label>
            <Input
              id="inq-phone"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
              maxLength={40}
              className="mt-1 bg-background/70 border-accent/40 rounded-none font-sans text-sm"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="inq-note" className="font-sans text-[10px] tracking-[0.3em] uppercase text-accent">
            A note <span className="normal-case tracking-normal text-primary/40">(optional)</span>
          </Label>
          <Textarea
            id="inq-note"
            value={form.note}
            onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))}
            maxLength={600}
            rows={3}
            className="mt-1 bg-background/70 border-accent/40 rounded-none font-sans text-sm resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={submitting}
          size="lg"
          className="mt-1 rounded-none font-sans tracking-[0.2em] uppercase text-xs"
        >
          {submitting ? "Sending…" : "Send to Beau Monde"}
        </Button>
      </motion.form>

      <motion.p
        variants={fadeUp}
        className="font-sans text-[9px] tracking-[0.4em] uppercase text-accent/70 mt-3"
      >
        Replies within 24 hours · 205 Worth Avenue
      </motion.p>
    </div>
  );
};

// ---------- Flip-book shell ----------

const Book = HTMLFlipBook as unknown as React.ForwardRefExoticComponent<any>;

const FlipBookView = () => {
  const bookRef = useRef<any>(null);
  const [vp, setVp] = useState({ w: 1200, h: 800, portrait: false, ready: false });
  const [page, setPage] = useState(0);
  const [lastViewedStyle, setLastViewedStyle] = useState<string | undefined>(undefined);
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  useEffect(() => {
    const recompute = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setVp({ w, h, portrait: w < 1024, ready: true });
    };
    recompute();
    window.addEventListener("resize", recompute);
    return () => window.removeEventListener("resize", recompute);
  }, []);

  const totalPages = STYLES.length + 4; // front cover + title + idioms + yours + inquiry

  const visibleSet = useMemo(() => {
    if (vp.portrait) return new Set([page]);
    // Pages: 0 = front cover, 1 = title, 2..11 = styles, 12 = yours, 13 = inquiry.
    // Pairs: 0+1, 2+3, 4+5, …, 12+13.
    const left = page % 2 === 0 ? page : page - 1;
    return new Set([left, left + 1]);
  }, [page, vp.portrait]);

  // Track which style the visitor last lingered on, to pre-fill the inquiry form.
  const handleFlip = (e: any) => {
    const p = e.data as number;
    setPage(p);
    setShowSwipeHint(false);
    // Style pages are 2..STYLES.length + 1
    if (p >= 2 && p < STYLES.length + 2) {
      setLastViewedStyle(STYLES[p - 2].name);
    }
  };

  const handleRestart = () => {
    bookRef.current?.pageFlip?.()?.turnToPage(0);
  };

  // Compute concrete page dimensions to fit below the nav.
  // Desktop spread shows 2 pages side-by-side; mobile shows one.
  const navH = 96; // 24 * 4
  const verticalPadding = 48;
  const availH = Math.max(420, vp.h - navH - verticalPadding);
  const availW = vp.w - 32;
  const pageRatio = 0.72; // width / height — slightly taller than 3:4
  let pageH = availH;
  let pageW = Math.round(pageH * pageRatio);
  const spreadW = vp.portrait ? pageW : pageW * 2;
  if (spreadW > availW) {
    const scale = availW / spreadW;
    pageW = Math.round(pageW * scale);
    pageH = Math.round(pageH * scale);
  }

  return (
    <div className="relative w-full" style={{ height: "calc(100dvh - 6rem)" }}>
      <div className="absolute inset-0 flex items-center justify-center px-2 sm:px-6">
        {vp.ready && (
        <Book
          key={`${vp.portrait}-${pageW}-${pageH}`}
          ref={bookRef}
          width={pageW}
          height={pageH}
          size="fixed"
          minWidth={280}
          maxWidth={1200}
          minHeight={400}
          maxHeight={1600}
          maxShadowOpacity={0.35}
          drawShadow
          showCover={false}
          usePortrait={vp.portrait}
          flippingTime={900}
          mobileScrollSupport={false}
          className="bm-flipbook"
          style={{}}
          startPage={0}
          onFlip={handleFlip}
        >
          <Page visible={visibleSet.has(0)} hardCover>
            <FrontCover />
          </Page>
          <Page visible={visibleSet.has(1)}>
            <CoverPlate />
          </Page>
          {STYLES.map((s, i) => (
            <Page key={s.name} visible={visibleSet.has(i + 2)}>
              <StylePlate s={s} index={i} />
            </Page>
          ))}
          <Page visible={visibleSet.has(STYLES.length + 2)} hardCover>
            <YoursPlate onRestart={handleRestart} />
          </Page>
          <Page visible={visibleSet.has(STYLES.length + 3)} hardCover>
            <InquiryPlate defaultStyle={lastViewedStyle} />
          </Page>
        </Book>
        )}
      </div>

      {/* Page counter */}
      <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
        <span className="inline-block bg-background/90 border border-accent/40 px-4 py-1.5 font-sans text-[10px] tracking-[0.3em] uppercase text-primary/70">
          {String(page + 1).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
        </span>
      </div>

      {/* Mobile swipe hint — only on portrait, first page, until user interacts */}
      {vp.portrait && page === 0 && showSwipeHint && (
        <div
          className="pointer-events-none absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 animate-fade-in"
          aria-hidden="true"
        >
          <div className="flex items-center gap-2 bg-background/95 border border-accent/40 px-5 py-3 shadow-lg">
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-primary/80">
              Swipe to turn
            </span>
            <span className="font-display text-xl text-accent animate-pulse">→</span>
          </div>
        </div>
      )}

      {/* Nav arrows */}
      <button
        onClick={() => bookRef.current?.pageFlip?.()?.flipPrev()}
        aria-label="Previous page"
        className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center text-primary/50 hover:text-accent transition-colors"
      >
        <span className="font-display text-3xl">‹</span>
      </button>
      <button
        onClick={() => bookRef.current?.pageFlip?.()?.flipNext()}
        aria-label="Next page"
        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 h-12 w-12 items-center justify-center text-primary/50 hover:text-accent transition-colors"
      >
        <span className="font-display text-3xl">›</span>
      </button>
    </div>
  );
};

// ---------- Scroll fallback (reduced-motion + SEO surface) ----------

const ScrollFallback = () => (
  <div className="pt-32 pb-24">
    <header className="max-w-4xl mx-auto px-6 text-center mb-16">
      <h1 className="font-display italic font-light text-primary text-5xl md:text-7xl leading-[1.02]">
        Find Your Style.
      </h1>
      <p className="font-sans font-light text-base md:text-lg text-primary/75 max-w-2xl mx-auto mt-6 leading-relaxed">
        Ten aesthetic worlds we know intimately — and one that's yours alone.
      </p>
    </header>
    <div className="max-w-4xl mx-auto px-6 space-y-20">
      {STYLES.map((s, i) => (
        <article key={s.name}>
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent mb-4">
            {String(i + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
          </p>
          {s.image && (
            <img
              src={s.image}
              alt={s.name}
              loading="lazy"
              decoding="async"
              className="w-full aspect-[16/11] object-cover mb-6"
            />
          )}
          <h2 className="font-display italic font-light text-primary text-4xl md:text-5xl mb-4">
            {s.name}
          </h2>
          <span className="block w-16 h-px bg-accent mb-4" />
          <p className="font-sans font-light text-base text-primary/75 leading-relaxed max-w-2xl">
            {s.descriptor}
          </p>
        </article>
      ))}
      <article className="text-center border-y border-accent/40 py-16">
        <h2 className="font-display italic font-light text-primary text-6xl md:text-8xl mb-8">
          Yours.
        </h2>
        <p className="font-sans font-light text-base text-primary/75 leading-relaxed max-w-md mx-auto mb-8">
          The most memorable Beau Monde houses begin with a vision no catalogue
          could hold.
        </p>
        <Button asChild size="lg" className="px-10">
          <Link to="/contact">Talk to Beau Monde</Link>
        </Button>
      </article>
    </div>
  </div>
);

const Projects = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <SEO
        title="Find Your Style"
        description="Ten design idioms — Oceanfront, Mediterranean, Bermuda Colonial, Transitional and more — that shape Beau Monde's bespoke Palm Beach residences."
        canonical="/projects"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Find Your Style", url: "/projects" },
        ]}
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(projectsSchema)}
        </script>
      </Helmet>
      <div className="min-h-screen bg-background text-primary">
        <Navigation />
        <main className="pt-20 md:pt-24">
          {prefersReducedMotion ? <ScrollFallback /> : <FlipBookView />}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Projects;