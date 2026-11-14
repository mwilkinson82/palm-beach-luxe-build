import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppRoutes } from "./App";
import { PUBLIC_PATHS } from "./lib/site";

type HelmetPart = { toString(): string };

type HelmetContext = {
  helmet?: {
    title: HelmetPart;
    meta: HelmetPart;
    link: HelmetPart;
    script: HelmetPart;
  };
};

export function render(url: string) {
  const helmetContext: HelmetContext = {};
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <StaticRouter location={url}>
            <AppRoutes />
          </StaticRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );

  const helmet = helmetContext.helmet;
  const head = helmet
    ? [helmet.title, helmet.meta, helmet.link, helmet.script].map((part) => part.toString()).join("\n")
    : "";

  return { html, head };
}

export { PUBLIC_PATHS };
