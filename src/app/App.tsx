import { useState } from "react";
import {
  BookOpen,
  Users,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  Database,
  Library,
  Instagram,
  ChevronDown,
  Star,
  Zap,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Choose together",
    subtitle: "Group-fit book choices",
    description:
      "Tired of one person always picking? Read The Room lets every member suggest and vote on the next read. The app surfaces books that score highest across your whole group's taste profile — no more passive agreement or hurt feelings.",
    detail: "Democratic voting · Preference matching · Wishlist sync",
    color: "#1E3D2F",
  },
  {
    icon: BarChart3,
    title: "Track progress",
    subtitle: "Shared reading updates",
    description:
      "See where everyone is in the book without asking in the group chat. Members log their page progress and the app shows a shared timeline so you never accidentally spoil the ending for someone still in chapter three.",
    detail: "Progress bars · Spoiler-safe view · Reading streaks",
    color: "#C4622D",
  },
  {
    icon: MessageSquare,
    title: "Discuss better",
    subtitle: "Prompts for meetings",
    description:
      "Walk into your next meeting with ready-to-use discussion prompts tailored to the book you just read. No more awkward silences or rehashing the plot summary — get straight to the good conversations.",
    detail: "Auto-generated prompts · Theme questions · Meeting notes",
    color: "#1E3D2F",
  },
];

const steps = [
  { step: "01", title: "Create your club", body: "Set up a shared space for your group in under a minute. Invite members via a link or QR code." },
  { step: "02", title: "Pick your next book", body: "Everyone suggests titles. The app tallies preferences and surfaces the best group match." },
  { step: "03", title: "Read & check in", body: "Log your progress as you go. The shared dashboard keeps everyone in sync without spoilers." },
  { step: "04", title: "Meet & discuss", body: "Use generated prompts to kick off your meeting. Rate the book together when you're done." },
];

const testimonials = [
  {
    quote: "We used to spend 20 minutes every session arguing about what to read next. Now it takes 30 seconds.",
    name: "Roos V.",
    club: "De Bladzijde, Amsterdam",
  },
  {
    quote: "The discussion prompts alone are worth it. Our conversations got so much deeper.",
    name: "Fatima A.",
    club: "Sunday Readers, Rotterdam",
  },
  {
    quote: "Finally an app that gets that a book club is a social thing, not a solo reading tracker.",
    name: "Pieter D.",
    club: "Boekbrekers, Ghent",
  },
];

export default function App() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div
      className="min-h-screen w-full"
      style={{ fontFamily: "'DM Sans', sans-serif", background: "var(--background)", color: "var(--foreground)" }}
    >
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md border-b" style={{ borderColor: "var(--border)", background: "rgba(250,247,242,0.88)" }}>
        <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: "1.15rem", color: "var(--primary)" }}>
          Read The Room
        </span>
        <div className="hidden md:flex items-center gap-8" style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
          <a href="#problem" className="hover:text-foreground transition-colors">Problem</a>
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <a
          href="#contact"
          className="px-4 py-2 rounded-full transition-opacity hover:opacity-90"
          style={{ background: "var(--primary)", color: "var(--primary-foreground)", fontSize: "0.875rem" }}
        >
          Share with your club →
        </a>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center relative overflow-hidden">
        {/* Decorative background rings */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[700px] h-[700px] rounded-full border opacity-10" style={{ borderColor: "var(--primary)", borderWidth: 1 }} />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[500px] h-[500px] rounded-full border opacity-10" style={{ borderColor: "var(--primary)", borderWidth: 1 }} />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 border" style={{ borderColor: "var(--border)", background: "var(--secondary)", fontSize: "0.8rem", color: "var(--muted-foreground)" }}>
          <Star size={13} fill="currentColor" style={{ color: "var(--accent)" }} />
          For physical book clubs · Free to try
        </div>

        <h1
          className="max-w-3xl mx-auto mb-6 leading-tight"
          style={{ fontFamily: "'Lora', serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 700, lineHeight: 1.15, color: "var(--primary)" }}
        >
          Your book club,<br />
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>without the chaos.</em>
        </h1>

        <p className="max-w-xl mx-auto mb-10" style={{ fontSize: "1.15rem", color: "var(--muted-foreground)", lineHeight: 1.7 }}>
          Read The Room is a reading app for book clubs to choose, track and discuss books together — so every member has a voice and every meeting actually gets going.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-full transition-opacity hover:opacity-90 flex items-center gap-2"
            style={{ background: "var(--primary)", color: "var(--primary-foreground)", fontSize: "1rem" }}
          >
            Scan to test the app <ArrowRight size={16} />
          </a>
          <a
            href="#features"
            className="px-7 py-3.5 rounded-full border flex items-center gap-2 hover:bg-secondary transition-colors"
            style={{ borderColor: "var(--border)", color: "var(--foreground)", fontSize: "1rem" }}
          >
            See how it works <ChevronDown size={16} />
          </a>
        </div>

        {/* Mock phone illustration */}
        <div className="relative mx-auto" style={{ width: 260 }}>
          <div
            className="rounded-3xl overflow-hidden shadow-2xl border-4"
            style={{ borderColor: "var(--primary)", background: "var(--primary)" }}
          >
            <div className="flex items-center justify-between px-5 py-3" style={{ background: "var(--primary)" }}>
              <span style={{ fontFamily: "'Lora', serif", color: "var(--primary-foreground)", fontWeight: 700, fontSize: "0.9rem" }}>Read The Room</span>
              <BookOpen size={16} color="var(--primary-foreground)" />
            </div>
            <div style={{ background: "var(--card)", padding: "1rem" }}>
              <p style={{ fontSize: "0.7rem", color: "var(--muted-foreground)", marginBottom: "0.75rem" }}>Next read — club vote open</p>
              {[
                { title: "The Thursday Murder Club", votes: 4, pct: 80 },
                { title: "Remarkably Bright Creatures", votes: 3, pct: 60 },
                { title: "The Covenant of Water", votes: 2, pct: 40 },
              ].map((b) => (
                <div key={b.title} className="mb-3">
                  <div className="flex justify-between mb-1" style={{ fontSize: "0.68rem", color: "var(--foreground)" }}>
                    <span>{b.title}</span>
                    <span style={{ color: "var(--accent)" }}>{b.votes} votes</span>
                  </div>
                  <div className="h-1.5 rounded-full w-full" style={{ background: "var(--muted)" }}>
                    <div className="h-1.5 rounded-full" style={{ width: `${b.pct}%`, background: "var(--accent)" }} />
                  </div>
                </div>
              ))}
              <div className="mt-4 pt-3 border-t" style={{ borderColor: "var(--border)" }}>
                <p style={{ fontSize: "0.65rem", color: "var(--muted-foreground)", marginBottom: "0.4rem" }}>Members reading now</p>
                <div className="flex gap-1">
                  {["R", "F", "P", "L", "+2"].map((m) => (
                    <div key={m} className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: m === "+2" ? "var(--muted)" : "var(--primary)", color: m === "+2" ? "var(--muted-foreground)" : "var(--primary-foreground)", fontSize: "0.6rem", fontWeight: 600 }}>{m}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="px-6 py-24" style={{ background: "var(--primary)" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-center mb-3" style={{ fontSize: "0.8rem", letterSpacing: "0.12em", color: "rgba(250,247,242,0.5)", textTransform: "uppercase" }}>The problem</p>
          <h2
            className="text-center mb-16"
            style={{ fontFamily: "'Lora', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "var(--primary-foreground)", lineHeight: 1.2 }}
          >
            Most reading apps help<br />one reader choose.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Before */}
            <div className="rounded-2xl p-8 border" style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.12)" }}>
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "rgba(196,98,45,0.2)", color: "#F4A46D" }}>BEFORE</span>
                <span style={{ fontSize: "0.85rem", color: "rgba(250,247,242,0.6)" }}>Messy group chat</span>
              </div>
              {[
                { sender: "Anna", msg: "What are we reading next? 😅" },
                { sender: "Bas", msg: "I want something short" },
                { sender: "Clara", msg: "Already suggested 3 options no one responded to lol" },
                { sender: "Daan", msg: "When's the meeting again?? I forgot 😬" },
                { sender: "Anna", msg: "Ugh ok I'll just pick something" },
              ].map((m, i) => (
                <div key={i} className="mb-3">
                  <div style={{ fontSize: "0.7rem", color: "rgba(250,247,242,0.4)", marginBottom: 2 }}>{m.sender}</div>
                  <div className="inline-block px-3 py-2 rounded-xl" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(250,247,242,0.85)", fontSize: "0.8rem", maxWidth: "85%" }}>
                    {m.msg}
                  </div>
                </div>
              ))}
            </div>

            {/* After */}
            <div className="rounded-2xl p-8 border relative overflow-hidden" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: "rgba(30,61,47,0.15)", color: "var(--primary)" }}>AFTER</span>
                <span style={{ fontSize: "0.85rem", color: "var(--muted-foreground)" }}>One shared reading space</span>
              </div>
              {[
                { icon: "📚", label: "Vote closes in 2 days", sub: "4 members have voted · 1 pending" },
                { icon: "📖", label: "Reading: The Thursday Murder Club", sub: "3/5 members past ch. 4" },
                { icon: "💬", label: "Meeting this Thursday", sub: "5 discussion prompts ready" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 mb-5">
                  <div className="text-xl mt-0.5">{item.icon}</div>
                  <div>
                    <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--foreground)" }}>{item.label}</div>
                    <div style={{ fontSize: "0.775rem", color: "var(--muted-foreground)", marginTop: 2 }}>{item.sub}</div>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-2 mt-4 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                <CheckCircle2 size={16} style={{ color: "var(--accent)" }} />
                <span style={{ fontSize: "0.8rem", color: "var(--muted-foreground)" }}>Everyone's on the same page</span>
              </div>
            </div>
          </div>

          <p className="text-center mt-12" style={{ fontSize: "1.1rem", color: "rgba(250,247,242,0.75)", fontFamily: "'Lora', serif", fontStyle: "italic" }}>
            "Read The Room helps the whole club decide."
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-center mb-3" style={{ fontSize: "0.8rem", letterSpacing: "0.12em", color: "var(--muted-foreground)", textTransform: "uppercase" }}>What it does</p>
          <h2
            className="text-center mb-4"
            style={{ fontFamily: "'Lora', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "var(--primary)", lineHeight: 1.2 }}
          >
            Three things, done right.
          </h2>
          <p className="text-center max-w-lg mx-auto mb-14" style={{ color: "var(--muted-foreground)", lineHeight: 1.7 }}>
            No feature bloat. Read The Room focuses on the three moments a book club actually needs support: picking, reading, and talking.
          </p>

          {/* Feature tabs */}
          <div className="flex gap-2 mb-10 overflow-x-auto pb-2 justify-center">
            {features.map((f, i) => (
              <button
                key={f.title}
                onClick={() => setActiveFeature(i)}
                className="px-5 py-2.5 rounded-full border whitespace-nowrap transition-all"
                style={{
                  borderColor: activeFeature === i ? "var(--primary)" : "var(--border)",
                  background: activeFeature === i ? "var(--primary)" : "transparent",
                  color: activeFeature === i ? "var(--primary-foreground)" : "var(--muted-foreground)",
                  fontSize: "0.875rem",
                }}
              >
                {f.title}
              </button>
            ))}
          </div>

          {features.map((f, i) => (
            <div
              key={f.title}
              className="grid md:grid-cols-2 gap-10 items-center rounded-2xl p-8 md:p-12 border transition-all"
              style={{
                display: activeFeature === i ? "grid" : "none",
                borderColor: "var(--border)",
                background: "var(--card)",
              }}
            >
              <div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ background: f.color }}>
                  <f.icon size={22} color="var(--primary-foreground)" />
                </div>
                <h3 style={{ fontFamily: "'Lora', serif", fontSize: "1.6rem", fontWeight: 700, color: "var(--foreground)", marginBottom: "0.5rem" }}>{f.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--accent)", marginBottom: "1rem", fontWeight: 600 }}>{f.subtitle}</p>
                <p style={{ color: "var(--muted-foreground)", lineHeight: 1.75, fontSize: "1rem", marginBottom: "1.5rem" }}>{f.description}</p>
                <div className="flex flex-wrap gap-2">
                  {f.detail.split(" · ").map((d) => (
                    <span key={d} className="px-3 py-1 rounded-full border" style={{ fontSize: "0.75rem", color: "var(--muted-foreground)", borderColor: "var(--border)" }}>{d}</span>
                  ))}
                </div>
              </div>
              <div>
                <FeatureIllustration index={i} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="px-6 py-24" style={{ background: "var(--secondary)" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-center mb-3" style={{ fontSize: "0.8rem", letterSpacing: "0.12em", color: "var(--muted-foreground)", textTransform: "uppercase" }}>How it works</p>
          <h2
            className="text-center mb-14"
            style={{ fontFamily: "'Lora', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "var(--primary)", lineHeight: 1.2 }}
          >
            Up and running in one evening.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.step} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px z-0" style={{ background: "var(--border)" }} />
                )}
                <div className="relative z-10 rounded-2xl p-6 border h-full" style={{ background: "var(--background)", borderColor: "var(--border)" }}>
                  <div className="mb-4" style={{ fontFamily: "'Lora', serif", fontSize: "2rem", fontWeight: 700, color: "var(--muted)", lineHeight: 1 }}>{s.step}</div>
                  <h4 style={{ fontWeight: 600, color: "var(--foreground)", marginBottom: "0.5rem", fontSize: "0.95rem" }}>{s.title}</h4>
                  <p style={{ fontSize: "0.825rem", color: "var(--muted-foreground)", lineHeight: 1.65 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-center mb-3" style={{ fontSize: "0.8rem", letterSpacing: "0.12em", color: "var(--muted-foreground)", textTransform: "uppercase" }}>Early readers</p>
          <h2
            className="text-center mb-14"
            style={{ fontFamily: "'Lora', serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "var(--primary)", lineHeight: 1.2 }}
          >
            Club members speak.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl p-7 border flex flex-col" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="var(--accent)" color="var(--accent)" />)}
                </div>
                <p style={{ fontFamily: "'Lora', serif", fontStyle: "italic", color: "var(--foreground)", lineHeight: 1.65, fontSize: "0.95rem", flex: 1 }}>"{t.quote}"</p>
                <div className="mt-5 pt-4 border-t" style={{ borderColor: "var(--border)" }}>
                  <div style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--foreground)" }}>{t.name}</div>
                  <div style={{ fontSize: "0.775rem", color: "var(--muted-foreground)", marginTop: 2 }}>{t.club}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IS IT FOR */}
      <section className="px-6 py-20" style={{ background: "var(--card)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "var(--primary)" }}>
            <Zap size={24} color="var(--primary-foreground)" />
          </div>
          <h2
            style={{ fontFamily: "'Lora', serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, color: "var(--primary)", lineHeight: 1.2, marginBottom: "1.25rem" }}
          >
            For physical book clubs that want fairer book choices and less planning chaos.
          </h2>
          <p style={{ color: "var(--muted-foreground)", lineHeight: 1.75, fontSize: "1.05rem" }}>
            Whether your club meets monthly in someone's living room or weekly at the local library, Read The Room removes the organisational friction so you can focus on the one thing that matters: great books and good conversation.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mt-10 text-left">
            {[
              { label: "5–15 members", desc: "Designed for the typical book club size. Everyone gets a voice." },
              { label: "Physical meetups", desc: "Complements in-person gatherings, doesn't try to replace them." },
              { label: "All reading speeds", desc: "Spoiler-safe progress view means fast and slow readers coexist happily." },
            ].map((c) => (
              <div key={c.label} className="rounded-xl p-5 border" style={{ borderColor: "var(--border)", background: "var(--background)" }}>
                <div style={{ fontWeight: 600, color: "var(--foreground)", fontSize: "0.9rem", marginBottom: "0.4rem" }}>{c.label}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--muted-foreground)", lineHeight: 1.6 }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="px-6 py-16" style={{ background: "var(--secondary)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-6" style={{ fontSize: "0.8rem", letterSpacing: "0.12em", color: "var(--muted-foreground)", textTransform: "uppercase" }}>Under the hood</p>
          <p style={{ fontFamily: "'Lora', serif", fontSize: "1.1rem", color: "var(--muted-foreground)", fontStyle: "italic", marginBottom: "2rem" }}>Built with React Native, Supabase & Open Library</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: Smartphone, label: "React Native", desc: "iOS & Android" },
              { icon: Database, label: "Supabase", desc: "Real-time backend" },
              { icon: Library, label: "Open Library", desc: "Book metadata" },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-3 px-6 py-4 rounded-xl border" style={{ background: "var(--background)", borderColor: "var(--border)" }}>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "var(--primary)" }}>
                  <t.icon size={16} color="var(--primary-foreground)" />
                </div>
                <div className="text-left">
                  <div style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--foreground)" }}>{t.label}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--muted-foreground)" }}>{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" className="px-6 py-24" style={{ background: "var(--primary)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="mb-4"
            style={{ fontFamily: "'Lora', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "var(--primary-foreground)", lineHeight: 1.15 }}
          >
            Find us here.
          </h2>
          <p className="mb-10" style={{ color: "rgba(250,247,242,0.7)", fontSize: "1.05rem", lineHeight: 1.7 }}>
            Scan the QR code to test the app, follow us for updates, or share this page with your club. We'd love your feedback.
          </p>

          {/* QR placeholder */}
          <div className="inline-flex flex-col items-center mb-10">
            <div
              className="w-32 h-32 rounded-2xl mb-3 flex items-center justify-center border-4"
              style={{ background: "var(--primary-foreground)", borderColor: "rgba(255,255,255,0.2)" }}
            >
              <div className="grid grid-cols-5 gap-0.5">
                {[...Array(25)].map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 rounded-sm"
                    style={{ background: [0,1,2,5,7,9,10,12,14,16,18,20,22,23,24].includes(i) ? "var(--primary)" : "transparent" }}
                  />
                ))}
              </div>
            </div>
            <span style={{ fontSize: "0.75rem", color: "rgba(250,247,242,0.5)" }}>Scan to test the app</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://instagram.com/readtheroom.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border transition-colors hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.25)", color: "var(--primary-foreground)", fontSize: "0.9rem" }}
            >
              <Instagram size={16} />
              @readtheroom.app
            </a>
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-full transition-opacity hover:opacity-90"
              style={{ background: "var(--accent)", color: "var(--accent-foreground)", fontSize: "0.9rem" }}
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: "Read The Room", url: window.location.href });
                }
              }}
            >
              <Users size={16} />
              Share with your club
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: "var(--border)", background: "var(--background)" }}>
        <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, color: "var(--primary)", fontSize: "1rem" }}>Read The Room</span>
        <span style={{ fontSize: "0.8rem", color: "var(--muted-foreground)" }}>© 2026 · Your book club, without the chaos.</span>
        <span style={{ fontSize: "0.8rem", color: "var(--muted-foreground)" }}>Made with ♥ for book lovers</span>
      </footer>
    </div>
  );
}

function FeatureIllustration({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="rounded-2xl p-6 border" style={{ background: "var(--background)", borderColor: "var(--border)" }}>
        <p style={{ fontSize: "0.75rem", color: "var(--muted-foreground)", marginBottom: "1rem" }}>Club vote · closes in 2 days</p>
        {[
          { title: "The Thursday Murder Club", pct: 80, votes: 4 },
          { title: "Remarkably Bright Creatures", pct: 60, votes: 3 },
          { title: "The Covenant of Water", pct: 40, votes: 2 },
          { title: "Yellowface", pct: 20, votes: 1 },
        ].map((b) => (
          <div key={b.title} className="mb-4">
            <div className="flex justify-between mb-1.5" style={{ fontSize: "0.8rem" }}>
              <span style={{ color: "var(--foreground)" }}>{b.title}</span>
              <span style={{ color: "var(--accent)", fontWeight: 600 }}>{b.votes}</span>
            </div>
            <div className="h-2 rounded-full" style={{ background: "var(--muted)" }}>
              <div className="h-2 rounded-full transition-all" style={{ width: `${b.pct}%`, background: "var(--primary)" }} />
            </div>
          </div>
        ))}
        <div className="mt-4 pt-4 border-t text-center" style={{ borderColor: "var(--border)" }}>
          <span style={{ fontSize: "0.75rem", color: "var(--muted-foreground)" }}>Winner announced Thursday 19:00</span>
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="rounded-2xl p-6 border" style={{ background: "var(--background)", borderColor: "var(--border)" }}>
        <p style={{ fontSize: "0.75rem", color: "var(--muted-foreground)", marginBottom: "1rem" }}>The Thursday Murder Club · ch. 1–22</p>
        {[
          { name: "Roos", ch: 18, pct: 82, emoji: "📚" },
          { name: "Fatima", ch: 12, pct: 55, emoji: "📖" },
          { name: "Pieter", ch: 22, pct: 100, emoji: "✅" },
          { name: "Lena", ch: 6, pct: 27, emoji: "🐢" },
          { name: "Bram", ch: 15, pct: 68, emoji: "☕" },
        ].map((m) => (
          <div key={m.name} className="flex items-center gap-3 mb-3">
            <span style={{ fontSize: "1rem" }}>{m.emoji}</span>
            <div className="flex-1">
              <div className="flex justify-between mb-1" style={{ fontSize: "0.75rem" }}>
                <span style={{ color: "var(--foreground)" }}>{m.name}</span>
                <span style={{ color: "var(--muted-foreground)" }}>ch. {m.ch}</span>
              </div>
              <div className="h-1.5 rounded-full" style={{ background: "var(--muted)" }}>
                <div className="h-1.5 rounded-full" style={{ width: `${m.pct}%`, background: m.pct === 100 ? "var(--accent)" : "var(--primary)" }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="rounded-2xl p-6 border" style={{ background: "var(--background)", borderColor: "var(--border)" }}>
      <p style={{ fontSize: "0.75rem", color: "var(--muted-foreground)", marginBottom: "1rem" }}>Discussion prompts · Thursday meeting</p>
      {[
        "What did you make of Richard Osman's use of humour to offset the darker themes?",
        "Which of the four club members did you identify with most, and why?",
        "The theme of aging and usefulness runs throughout — how did it land for you?",
        "Would you want to join a Thursday Murder Club yourself?",
        "Rate this book for next season's shortlist (1–5 stars)",
      ].map((q, i) => (
        <div key={i} className="flex gap-3 mb-3">
          <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, color: "var(--accent)", fontSize: "0.85rem", minWidth: "1.2rem" }}>{i + 1}.</span>
          <p style={{ fontSize: "0.78rem", color: "var(--muted-foreground)", lineHeight: 1.5 }}>{q}</p>
        </div>
      ))}
    </div>
  );
}
