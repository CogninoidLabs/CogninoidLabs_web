import Link from "next/link";
import { Mail, Cpu } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/BrandIcons";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/builds", label: "Builds" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://github.com/CogninoidLabs",
    icon: GithubIcon,
    label: "GitHub",
  },
  {
    href: "mailto:contact@cogninoidlabs.com",
    icon: Mail,
    label: "contact@cogninoidlabs.com",
  },
  {
    href: "https://linkedin.com/company/cogninoidlabs",
    icon: LinkedinIcon,
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/CogninoidLabs",
    icon: TwitterIcon,
    label: "Twitter / X",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#04040f] mt-auto">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Cpu className="w-4 h-4 text-white" strokeWidth={2} />
              </div>
              <span className="font-semibold text-white text-sm tracking-wide">
                Cogninoid Labs
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-6">
              A research-tech studio building embodied intelligence for
              human–machine systems — at the intersection of AI, robotics,
              3D printing, and autonomous experimentation.
            </p>
            <p className="text-slate-600 text-xs">
              AI · Robotics · Human–Machine Interaction · 3D Printing · Autonomous Experimentation
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">
              Pages
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-500 text-sm hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-5">
              Connect
            </h4>
            <ul className="flex flex-col gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-2 text-slate-500 text-sm hover:text-cyan-400 transition-colors duration-200"
                    >
                      <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">{link.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Cogninoid Labs. All rights reserved.
          </p>
          <p className="text-slate-700 text-xs">
            Building embodied intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
}
