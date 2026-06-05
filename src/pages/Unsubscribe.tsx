import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { supabase } from "@/integrations/supabase/client";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string;

type State = "loading" | "valid" | "already" | "invalid" | "submitting" | "success" | "error";

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [state, setState] = useState<State>("loading");

  useEffect(() => {
    if (!token) {
      setState("invalid");
      return;
    }
    (async () => {
      try {
        const res = await fetch(
          `${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`,
          { headers: { apikey: SUPABASE_KEY } }
        );
        const json = await res.json();
        if (!res.ok) {
          setState("invalid");
          return;
        }
        if (json.reason === "already_unsubscribed") {
          setState("already");
          return;
        }
        setState(json.valid ? "valid" : "invalid");
      } catch {
        setState("invalid");
      }
    })();
  }, [token]);

  const confirm = async () => {
    if (!token) return;
    setState("submitting");
    try {
      const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
        body: { token },
      });
      if (error) throw error;
      if (data?.reason === "already_unsubscribed") setState("already");
      else setState("success");
    } catch {
      setState("error");
    }
  };

  return (
    <>
      <SEO title="Unsubscribe" description="Manage your email preferences with Beau Monde Builders." canonical="/unsubscribe" />
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center px-6 py-32">
          <div className="max-w-xl w-full text-center border border-accent/20 bg-card px-10 py-16 shadow-lifted">
            <p className="text-[10px] tracking-[0.4em] uppercase text-accent font-sans font-medium mb-6">
              Email Preferences
            </p>

            {state === "loading" && (
              <p className="font-sans text-foreground/70">Verifying your request…</p>
            )}

            {state === "valid" && (
              <>
                <h1 className="font-display italic font-light text-4xl md:text-5xl text-foreground mb-6">
                  Unsubscribe from emails
                </h1>
                <p className="font-sans text-foreground/70 leading-relaxed mb-10">
                  Confirm below and you will no longer receive emails from Beau Monde Builders.
                </p>
                <button
                  onClick={confirm}
                  className="bg-primary text-primary-foreground px-12 py-5 text-[11px] font-sans tracking-[0.3em] uppercase ring-1 ring-inset ring-accent/30 hover:ring-accent/60 transition-all duration-500"
                >
                  Confirm Unsubscribe
                </button>
              </>
            )}

            {state === "submitting" && (
              <p className="font-sans text-foreground/70">Updating your preferences…</p>
            )}

            {state === "success" && (
              <>
                <h1 className="font-display italic font-light text-4xl md:text-5xl text-foreground mb-6">
                  You have been unsubscribed
                </h1>
                <p className="font-sans text-foreground/70 leading-relaxed">
                  You will no longer receive emails from Beau Monde Builders. If this was a mistake, please contact us at (321) 298-4122.
                </p>
              </>
            )}

            {state === "already" && (
              <>
                <h1 className="font-display italic font-light text-4xl md:text-5xl text-foreground mb-6">
                  Already unsubscribed
                </h1>
                <p className="font-sans text-foreground/70 leading-relaxed">
                  This address has already been removed from our email list.
                </p>
              </>
            )}

            {(state === "invalid" || state === "error") && (
              <>
                <h1 className="font-display italic font-light text-4xl md:text-5xl text-foreground mb-6">
                  Link no longer valid
                </h1>
                <p className="font-sans text-foreground/70 leading-relaxed">
                  This unsubscribe link is invalid or has expired. Please reach out to us directly at (321) 298-4122 or ajhoover@mac.com.
                </p>
              </>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Unsubscribe;