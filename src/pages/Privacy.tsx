import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { RevealAnimation } from "@/components/RevealAnimation";

const Privacy = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy"
        canonical="/privacy"
        description="How Beau Monde Builders collects, uses, and protects your personal information across our website and luxury homebuilding services."
      />
      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-secondary to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <RevealAnimation animation="fade-up">
              <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <div className="h-px w-12 bg-accent" />
                  <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-light">Legal</span>
                  <div className="h-px w-12 bg-accent" />
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-thin mb-6">
                  Privacy <span className="italic font-light text-muted-foreground">Policy</span>
                </h1>
                <p className="text-muted-foreground font-light">
                  Last updated: January 2025
                </p>
              </div>
            </RevealAnimation>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto prose prose-lg prose-neutral">
              <RevealAnimation animation="fade-up">
                <div className="space-y-12">
                  <div>
                    <h2 className="text-2xl font-display font-light mb-4">Introduction</h2>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      Beau Monde Builders ("we," "our," or "us") respects your privacy and is committed to protecting 
                      your personal information. This Privacy Policy explains how we collect, use, disclose, and 
                      safeguard your information when you visit our website or engage our luxury home building services.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-display font-light mb-4">Information We Collect</h2>
                    <p className="text-muted-foreground font-light leading-relaxed mb-4">
                      We may collect information about you in various ways, including:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground font-light space-y-2">
                      <li><strong className="text-foreground">Personal Data:</strong> Name, email address, phone number, and mailing address when you contact us or request information.</li>
                      <li><strong className="text-foreground">Project Information:</strong> Details about your property, design preferences, and construction requirements.</li>
                      <li><strong className="text-foreground">Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, and pages visited.</li>
                      <li><strong className="text-foreground">Communication Records:</strong> Records of correspondence when you contact us via email, phone, or our contact form.</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-display font-light mb-4">How We Use Your Information</h2>
                    <p className="text-muted-foreground font-light leading-relaxed mb-4">
                      We use the information we collect to:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground font-light space-y-2">
                      <li>Respond to your inquiries and provide information about our services</li>
                      <li>Develop project proposals and cost estimates</li>
                      <li>Communicate with you throughout the construction process</li>
                      <li>Improve our website and customer experience</li>
                      <li>Send periodic updates about projects or services (with your consent)</li>
                      <li>Comply with legal obligations and protect our rights</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-display font-light mb-4">Information Sharing</h2>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      We do not sell, trade, or rent your personal information to third parties. We may share 
                      information with trusted partners who assist us in operating our website and conducting 
                      our business, provided they agree to keep this information confidential. We may also 
                      share information when required by law or to protect our rights and safety.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-display font-light mb-4">Data Security</h2>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      We implement appropriate security measures to protect your personal information against 
                      unauthorized access, alteration, disclosure, or destruction. However, no method of 
                      transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-display font-light mb-4">Cookies and Tracking</h2>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      Our website may use cookies and similar tracking technologies to enhance your browsing 
                      experience. You can set your browser to refuse cookies or alert you when cookies are 
                      being sent. However, some features of our website may not function properly without cookies.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-display font-light mb-4">Your Rights</h2>
                    <p className="text-muted-foreground font-light leading-relaxed mb-4">
                      You have the right to:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground font-light space-y-2">
                      <li>Access the personal information we hold about you</li>
                      <li>Request correction of inaccurate information</li>
                      <li>Request deletion of your personal information</li>
                      <li>Opt-out of marketing communications</li>
                      <li>Lodge a complaint with a supervisory authority</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-display font-light mb-4">Third-Party Links</h2>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      Our website may contain links to third-party websites. We are not responsible for the 
                      privacy practices or content of these external sites. We encourage you to review the 
                      privacy policies of any third-party sites you visit.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-display font-light mb-4">Children's Privacy</h2>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      Our services are not directed to individuals under the age of 18. We do not knowingly 
                      collect personal information from children. If you believe we have collected information 
                      from a child, please contact us immediately.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-display font-light mb-4">Changes to This Policy</h2>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      We may update this Privacy Policy from time to time. We will notify you of any changes 
                      by posting the new policy on this page and updating the "Last updated" date. We encourage 
                      you to review this policy periodically.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-display font-light mb-4">Contact Us</h2>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      If you have questions about this Privacy Policy or our privacy practices, please contact us at:
                    </p>
                    <div className="mt-4 p-6 bg-secondary rounded-lg">
                      <p className="text-foreground font-medium">Beau Monde Builders</p>
                      <p className="text-muted-foreground font-light">1129 Rockledge Blvd</p>
                      <p className="text-muted-foreground font-light">Rockledge, FL 32955</p>
                      <p className="text-muted-foreground font-light mt-2">
                        Email: <a href="mailto:ajhoover@mac.com" className="text-accent hover:underline">ajhoover@mac.com</a>
                      </p>
                      <p className="text-muted-foreground font-light">
                        Phone: <a href="tel:+13212984122" className="text-accent hover:underline">(321) 298-4122</a>
                      </p>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Privacy;
