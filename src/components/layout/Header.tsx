
import { env } from "../../lib/env";
import { Button } from "../ui/button";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-[#f1ddc9] bg-[#fffaf2]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-[#ff6b4a] to-[#ff9d7a] shadow-[0_8px_20px_-10px_rgba(217,72,40,0.8)]" />
          <div>
            <div className="text-base font-semibold text-[#26170e]">{env.appName}</div>
            <div className="text-xs text-[#6f5b4a]">Bubble.io Agency</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Navbar />
          <Button asChild variant="secondary" className="hidden sm:inline-flex bg-[#ff6b4a] text-white hover:bg-[#d94828]">
            <Link to="#contact">
              <Phone className="mr-2 h-4 w-4" />
              Book a Call
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
