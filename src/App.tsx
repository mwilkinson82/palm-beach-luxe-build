import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ScrollToTop } from "@/components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Process from "./pages/Process";
import Projects from "./pages/Projects";
import Renovations from "./pages/Renovations";
import Press from "./pages/Press";
import Social from "./pages/Social";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Sitemap from "./pages/Sitemap";
import Unsubscribe from "./pages/Unsubscribe";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export const AppRoutes = () => (
  <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/process" element={<Process />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/renovations" element={<Renovations />} />
      <Route path="/press" element={<Press />} />
      <Route path="/social" element={<Social />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/sitemap" element={<Sitemap />} />
      <Route path="/unsubscribe" element={<Unsubscribe />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
