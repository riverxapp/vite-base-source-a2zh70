
import { env } from "../../lib/env";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#f1ddc9] bg-[#26170e] text-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#ff6b4a] to-[#ff9d7a]" />
              <div>
                <div className="text-base font-semibold">{env.appName}</div>
                <div className="text-xs text-white/60">Bubble.io Agency</div>
              </div>
            </div>
            <p className="text-sm text-white/70">
              Expert Bubble.io development agency helping founders launch faster.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="#work" className="hover:text-[#ff6b4a] transition-colors">MVP Development</Link></li>
              <li><Link to="#work" className="hover:text-[#ff6b4a] transition-colors">Full App Development</Link></li>
              <li><Link to="#work" className="hover:text-[#ff6b4a] transition-colors">API Integrations</Link></li>
              <li><Link to="#work" className="hover:text-[#ff6b4a] transition-colors">Design & UX</Link></li>
              <li><Link to="#work" className="hover:text-[#ff6b4a] transition-colors">Maintenance</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="#" className="hover:text-[#ff6b4a] transition-colors">About Us</Link></li>
              <li><Link to="#work" className="hover:text-[#ff6b4a] transition-colors">Case Studies</Link></li>
              <li><Link to="#contact" className="hover:text-[#ff6b4a] transition-colors">Contact</Link></li>
              <li><Link to="#" className="hover:text-[#ff6b4a] transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#ff6b4a]" />
                <a href="mailto:hello@bubbledev.agency" className="hover:text-[#ff6b4a] transition-colors">
                  hello@bubbledev.agency
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#ff6b4a]" />
                <a href="tel:+1234567890" className="hover:text-[#ff6b4a] transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#ff6b4a] mt-0.5" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/50">
            © {year} {env.appName}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <Link to="#" className="hover:text-[#ff6b4a] transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-[#ff6b4a] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
