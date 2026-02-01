import { Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/artificall-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img src={logo} alt="artificall" className="h-8 mb-4" />
            <p className="text-gray-600 text-sm max-w-sm">
              Future-Driven Freelancing. Wir verbinden KI-Innovation mit 
              kreativer Exzellenz für Ihren digitalen Erfolg.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-gray-900 mb-4">Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Leistungen", href: "#services" },
                { label: "Preise", href: "#pricing" },
                { label: "Über uns", href: "#about" },
                { label: "Kontakt", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading font-semibold text-gray-900 mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              {["Impressum", "Datenschutz", "AGB"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {currentYear} artificall. Alle Rechte vorbehalten.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { icon: Instagram, href: "https://instagram.com/artificall.at/" },
              { icon: Linkedin, href: "https://www.linkedin.com/company/artificall-gesbr/" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
