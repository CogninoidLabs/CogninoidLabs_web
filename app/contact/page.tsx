"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Cpu, Users, FlaskConical, Bot } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/BrandIcons";

const contactReasons = [
  { icon: Users, label: "Collaboration", desc: "Joint research, co-development, or project partnerships" },
  { icon: FlaskConical, label: "Research", desc: "Academic collaboration or knowledge exchange" },
  { icon: Bot, label: "Prototyping", desc: "AI robotics or hardware prototyping inquiries" },
  { icon: MessageSquare, label: "General", desc: "Other questions or introductions" },
];

const socialLinks = [
  {
    icon: GithubIcon,
    label: "GitHub",
    handle: "@CogninoidLabs",
    href: "https://github.com/CogninoidLabs",
    color: "hover:border-white/30 hover:bg-white/5",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "contact@cogninoidlabs.com",
    href: "mailto:contact@cogninoidlabs.com",
    color: "hover:border-cyan-500/40 hover:bg-cyan-500/5",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    handle: "Cogninoid Labs",
    href: "https://linkedin.com/company/cogninoidlabs",
    color: "hover:border-blue-500/40 hover:bg-blue-500/5",
  },
  {
    icon: TwitterIcon,
    label: "Twitter / X",
    handle: "@CogninoidLabs",
    href: "https://twitter.com/CogninoidLabs",
    color: "hover:border-violet-500/40 hover:bg-violet-500/5",
  },
];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay },
  };
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const mailto = `mailto:contact@cogninoidlabs.com?subject=${encodeURIComponent(form.subject || "Contact from website")}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailto;
    setSubmitted(true);
  }

  return (
    <main className="relative pt-24 pb-32">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div {...fadeUp()} className="mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">
            Contact
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Let&apos;s connect
          </h1>
          <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
            Interested in collaboration, research, prototyping, or AI robotics systems?
            Cogninoid Labs is open to connections from researchers, engineers, and builders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: Form */}
          <motion.div {...fadeUp(0.1)} className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-80 bg-white/[0.04] border border-white/[0.08] rounded-3xl text-center p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center mb-5">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message sent</h3>
                <p className="text-slate-400 text-sm">Your email client should have opened. We&apos;ll get back to you soon.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs text-slate-600 hover:text-cyan-400 transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/[0.04] border border-white/[0.08] rounded-3xl p-8 flex flex-col gap-5">
                <h2 className="text-white font-semibold text-lg mb-1">Send a message</h2>

                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-500 mb-1.5 font-medium">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.07] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 mb-1.5 font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.07] transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs text-slate-500 mb-1.5 font-medium">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.07] transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs text-slate-500 mb-1.5 font-medium">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us about your interest, project, or question..."
                    className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.07] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/20"
                >
                  Send Message
                </button>

                <p className="text-xs text-slate-600 text-center">
                  This opens your email client. Direct email: contact@cogninoidlabs.com
                </p>
              </form>
            )}
          </motion.div>

          {/* Right: Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* What we&apos;re looking for */}
            <motion.div {...fadeUp(0.15)}>
              <h3 className="text-white font-semibold mb-4">We&apos;d love to hear from you if you&apos;re interested in:</h3>
              <div className="flex flex-col gap-3">
                {contactReasons.map((r) => {
                  const Icon = r.icon;
                  return (
                    <div key={r.label} className="flex items-start gap-3 p-4 bg-white/[0.03] border border-white/[0.06] rounded-2xl">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-cyan-400" strokeWidth={1.75} />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{r.label}</p>
                        <p className="text-slate-500 text-xs leading-relaxed">{r.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div {...fadeUp(0.25)}>
              <h3 className="text-white font-semibold mb-4">Find us on</h3>
              <div className="flex flex-col gap-2.5">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`flex items-center gap-3.5 px-4 py-3.5 bg-white/[0.04] border border-white/[0.08] rounded-2xl transition-all duration-200 ${link.color}`}
                    >
                      <Icon className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      <div>
                        <p className="text-white text-xs font-medium">{link.label}</p>
                        <p className="text-slate-600 text-xs">{link.handle}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
