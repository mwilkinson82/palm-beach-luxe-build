import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { RevealAnimation } from "@/components/RevealAnimation";

const Terms = () => {
  return (
    <>
      <SEO 
        title="Terms of Service"
        canonical="/terms"
        description="Terms and conditions governing use of the Beau Monde Builders website and engagement of our Palm Beach luxury homebuilding services."
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
                  Terms of <span className="italic font-light text-muted-foreground">Service</span>
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
                    <h2 className="text-2xl font-display font-light mb-4">Agreement to Terms</h2>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      By accessing and using the Beau Monde Builders website ("Site"), you agree to be bound by 
                      these Terms of Service ("Terms"). If you disagree with any part of these terms, you may 
                      not access the Site. These Terms apply to all visitors, users, and others who access or 
                      use the Site.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-display font-light mb-4">Use of Our Website</h2>
                    <p className="text-muted-foreground font-light leading-relaxed mb-4">
                      You agree to use our website only for lawful purposes and in accordance with these Terms. 
                      You agree not to:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground font-light space-y-2">
                      <li>Use the Site in any way that violates applicable laws or regulations</li>
                      <li>Attempt to gain unauthorized access to any portion of the Site</li>
                      <li>Use the Site to transmit harmful code or malware</li>
                      <li>Engage in any conduct that restricts or inhibits others' use of the Site</li>
                      <li>Use any automated means to access the Site without our express permission</li>
                      <li>Impersonate or misrepresent your affiliation with any person or entity</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-display font-light mb-4">Intellectual Property</h2>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      The Site and its original content, features, and functionality are owned by Beau Monde 
                      Builders and are protected by international copyright, trademark, patent, trade secret, 
                      and other intellectual property laws. Our trademarks and trade dress may not be used in 
                      connection with any product or service without our prior written consent.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-display font-light mb-4">Project Images and Portfolio</h2>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      All project images, photographs, renderings, and portfolio materials displayed on our 
                      website are the property of Beau Monde Builders or used with permission. These materials 
                      may not be copied, reproduced, distributed, or used without our express written permission. 
                      Some images may represent conceptual designs or completed projects and are for illustrative 
                      purposes only.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-display font-light mb-4">Construction Services</h2>
                    <p className="text-muted-foreground font-light leading-relaxed mb-4">
                      Information provided on this website regarding our construction services is for general 
                      informational purposes only and does not constitute a binding offer or contract. All 
                      construction projects are subject to:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground font-light space-y-2">
                      <li>Execution of a formal written construction agreement</li>
                      <li>Site evaluation and feasibility assessment</li>
                      <li>Applicable permits and regulatory approvals</li>
                      <li>Detailed project specifications and pricing</li>
                      <li>Our acceptance of the project</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-display font-light mb-4">Estimates and Pricing</h2>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      Any estimates, pricing information, or project timelines provided on this website or 
                      during initial consultations are preliminary and subject to change. Final pricing will 
                      be determined after a comprehensive site evaluation, detailed design development, and 
                      will be specified in a formal construction contract.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-display font-light mb-4">Disclaimer of Warranties</h2>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      The Site is provided on an "AS IS" and "AS AVAILABLE" basis. We disclaim all warranties 
                      of any kind, whether express or implied, including but not limited to the implied 
                      warranties of merchantability, fitness for a particular purpose, and non-infringement. 
                      We do not warrant that the Site will be uninterrupted, secure, or error-free.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-display font-light mb-4">Limitation of Liability</h2>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      In no event shall Beau Monde Builders, its directors, employees, partners, agents, 
                      suppliers, or affiliates be liable for any indirect, incidental, special, consequential, 
                      or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                      or other intangible losses, resulting from your access to or use of (or inability to 
                      access or use) the Site.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-display font-light mb-4">Indemnification</h2>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      You agree to defend, indemnify, and hold harmless Beau Monde Builders and its licensees, 
                      licensors, employees, contractors, agents, officers, and directors from and against any 
                      claims, damages, obligations, losses, liabilities, costs, or debt arising from your use 
                      of and access to the Site or your violation of these Terms.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-display font-light mb-4">Third-Party Links</h2>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      Our Site may contain links to third-party websites or services that are not owned or 
                      controlled by Beau Monde Builders. We have no control over and assume no responsibility 
                      for the content, privacy policies, or practices of any third-party websites or services. 
                      We strongly advise you to read the terms and conditions of any third-party sites you visit.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-display font-light mb-4">Governing Law</h2>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      These Terms shall be governed and construed in accordance with the laws of the State of 
                      Florida, United States, without regard to its conflict of law provisions. Any disputes 
                      arising under or in connection with these Terms shall be subject to the exclusive 
                      jurisdiction of the courts located in Palm Beach County, Florida.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-display font-light mb-4">Changes to Terms</h2>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      We reserve the right to modify or replace these Terms at any time at our sole discretion. 
                      If a revision is material, we will provide notice prior to any new terms taking effect. 
                      What constitutes a material change will be determined at our sole discretion. By continuing 
                      to access or use our Site after any revisions become effective, you agree to be bound by 
                      the revised terms.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-display font-light mb-4">Severability</h2>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      If any provision of these Terms is held to be unenforceable or invalid, such provision 
                      will be changed and interpreted to accomplish the objectives of such provision to the 
                      greatest extent possible under applicable law, and the remaining provisions will continue 
                      in full force and effect.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-display font-light mb-4">Contact Us</h2>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      If you have any questions about these Terms of Service, please contact us at:
                    </p>
                    <div className="mt-4 p-6 bg-secondary rounded-lg">
                      <p className="text-foreground font-medium">Beau Monde Builders</p>
                      <p className="text-muted-foreground font-light">205 Worth Avenue, Suite 120</p>
                      <p className="text-muted-foreground font-light">Palm Beach, FL 33480</p>
                      <p className="text-muted-foreground font-light mt-2">
                        Email: <a href="mailto:aj@bmbpalmbeach.com" className="text-accent hover:underline">aj@bmbpalmbeach.com</a>
                      </p>
                      <p className="text-muted-foreground font-light">
                        Phone: <a href="tel:+15616468992" className="text-accent hover:underline">(561) 646-8992</a>
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

export default Terms;
