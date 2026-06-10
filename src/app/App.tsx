import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Instagram,
  Library,
  MessageSquare,
  Play,
  QrCode,
  Sparkles,
  Users,
} from "lucide-react";


const APP_URL = "https://elisazornig.github.io/PLE_Reading_Room/";
const VIDEO_SRC = "product-video.mp4";

const features = [
  {
    icon: Users,
    title: "Choose together",
    body: "Get club-based recommendations, build a shortlist and choose the next book with voting, swipe or the wheel.",
  },
  {
    icon: BookOpen,
    title: "Track progress",
    body: "See the current club book, meeting details and reading progress in one shared dashboard.",
  },
  {
    icon: MessageSquare,
    title: "Discuss better",
    body: "Use preset discussion questions and meeting notes to make every book club conversation easier to start.",
  },
];

const previewScreens = [
  {
    title: "Home",
    body: "A calm overview of your current reading, monthly stats and next book club moments.",
    image: "screenshots/home.jpeg",
  },
  {
    title: "Club dashboard",
    body: "Everything your club needs for the current book in one shared place.",
    image: "screenshots/club.jpeg",
  },
  {
    title: "Recommendations",
    body: "See why a book fits your group before adding it to the shortlist.",
    image: "screenshots/recommendations.jpeg",
  },
  {
    title: "Shortlist",
    body: "Move from options to a final book without endless chat messages.",
    image: "screenshots/shortlist.jpeg",
  },
  {
    title: "Discussion",
    body: "Start the meeting with useful questions instead of awkward silence.",
    image: "screenshots/discussie.jpeg",
  },
  {
    title: "Reading stats",
    body: "Keep personal tracking simple, visual and easy to update.",
    image: "screenshots/stats.jpeg",
  },
];

type PreviewScreen = (typeof previewScreens)[number];

const steps = [
  {
    number: "01",
    title: "Create your club",
    body: "Invite your members and set shared reading preferences.",
  },
  {
    number: "02",
    title: "Get group-fit recommendations",
    body: "See books that match the whole club, with a short explanation why.",
  },
  {
    number: "03",
    title: "Choose the next read",
    body: "Add books to the shortlist and decide together.",
  },
  {
    number: "04",
    title: "Read, track & discuss",
    body: "Follow progress and prepare the meeting with discussion questions.",
  },
];

export default function App() {
  const [selectedScreen, setSelectedScreen] = useState<PreviewScreen | null>(
      null
  );

  return (
      <main className="min-h-screen bg-background text-foreground">
        <Nav />

        <section className="relative overflow-hidden px-6 pb-16 pt-28 md:pt-32">
          <div className="absolute right-[-120px] top-16 h-[360px] w-[360px] rounded-full bg-[var(--accent-soft)] opacity-80 blur-3xl" />
          <div className="absolute bottom-0 left-[-120px] h-[280px] w-[280px] rounded-full bg-[var(--success-soft)] opacity-70 blur-3xl" />

          <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
            <div>

              <h1 className="max-w-3xl font-serif text-5xl font-bold leading-tight text-foreground md:text-7xl">
                Your book club,
                <span className="block text-[var(--accent)]">
                without the chaos.
              </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                Read The Room is a calm reading app for physical book clubs to
                choose, track and discuss books together.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                    href={APP_URL}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-7 py-4 font-medium text-white transition hover:opacity-90"
                >
                  Try the app
                  <ArrowRight size={18} />
                </a>

                <a
                    href="#video"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-4 font-medium text-foreground transition hover:bg-surface"
                >
                  Watch video
                  <Play size={18} />
                </a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[370px]">
              <PhoneFrame image="screenshots/home.jpeg" title="Home screen" />
            </div>
          </div>
        </section>

        <section id="problem" className="px-6 py-14">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                The problem
              </p>
              <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
                Book clubs should be about books, not planning stress.
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                "What should we read next?",
                "Who is actually up to date?",
                "When are we meeting again?",
                "How do we start the discussion?",
              ].map((item) => (
                  <div
                      key={item}
                      className="group flex min-h-[96px] items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4 shadow-sm transition hover:-translate-y-1 hover:border-[var(--accent)]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
                      <CheckCircle2 size={20} />
                    </div>

                    <p className="text-[15px] font-semibold leading-6 text-foreground">
                      {item}
                    </p>
                  </div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.75rem] bg-foreground px-6 py-8 text-center text-background md:px-10">
              <p className="font-serif text-2xl italic leading-9 md:text-3xl">
                Most reading apps help one reader choose.
                <br />
                Read The Room helps the whole club decide.
              </p>
            </div>
          </div>
        </section>

        <section id="video" className="bg-surface px-6 py-16">
          <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div className="mx-auto w-full max-w-[320px] overflow-hidden rounded-[2rem] border border-border bg-card p-3 shadow-sm">
              <video
                  src={VIDEO_SRC}
                  controls
                  playsInline
                  className="aspect-[9/16] w-full rounded-[1.5rem] bg-black object-cover"
              />
            </div>

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Product video
              </p>

              <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
                See Read The Room in action
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-muted-foreground">
                A short vertical product video that shows how a chaotic book club
                chat turns into one shared reading space.
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  "Choose the next book together",
                  "Track progress in one club dashboard",
                  "Prepare meetings with discussion questions",
                ].map((item) => (
                    <div
                        key={item}
                        className="flex items-center gap-3 text-sm font-medium"
                    >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--success-soft)] text-[var(--success)]">
                    <CheckCircle2 size={16} />
                  </span>
                      {item}
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                What it does
              </p>
              <h2 className="font-serif text-4xl font-bold md:text-5xl">
                Three things, done right.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                    <article
                        key={feature.title}
                        className="rounded-[1.75rem] border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-[var(--accent)]"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
                        <Icon size={22} />
                      </div>

                      <h3 className="mb-2 font-serif text-2xl font-bold">
                        {feature.title}
                      </h3>

                      <p className="leading-7 text-muted-foreground">
                        {feature.body}
                      </p>
                    </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="preview" className="px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                App preview
              </p>
              <h2 className="font-serif text-4xl font-bold md:text-5xl">
                A closer look inside the app.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
                Click a screen to view it larger.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {previewScreens.map((screen) => (
                  <button
                      key={screen.title}
                      type="button"
                      onClick={() => setSelectedScreen(screen)}
                      className="group overflow-hidden rounded-[1.75rem] border border-border bg-card text-left shadow-sm transition hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-md"
                  >
                    <div className="bg-background px-4 pt-4">
                      <div className="mx-auto flex h-[310px] max-w-[170px] items-center justify-center overflow-hidden rounded-[1.35rem] border border-border bg-card">
                        <img
                            src={screen.image}
                            alt={screen.title}
                            className="h-full w-full object-contain"
                        />
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <h3 className="font-serif text-2xl font-bold">
                          {screen.title}
                        </h3>

                        <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-medium text-[var(--accent)] opacity-0 transition group-hover:opacity-100">
                View
              </span>
                      </div>

                      <p className="text-sm leading-6 text-muted-foreground">
                        {screen.body}
                      </p>
                    </div>
                  </button>
              ))}
            </div>
          </div>
        </section>
        <section id="different" className="bg-background px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Why it is different
              </p>

              <h2 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
                Not another Goodreads clone.
              </h2>

              <p className="mt-4 leading-7 text-muted-foreground">
                Read The Room is not trying to replace every reading app. It
                focuses on the part most apps leave messy: choosing, tracking and
                discussing books as a group.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  old: "Most reading apps are built for solo readers.",
                  fresh: "Read The Room is built around the whole club.",
                },
                {
                  old: "Most recommendations are individual.",
                  fresh: "Read The Room looks at shared group preferences.",
                },
                {
                  old: "Most book clubs organise in chat.",
                  fresh:
                      "Choosing, progress and discussion live in one calm space.",
                },
                {
                  old: "Most apps feel busy.",
                  fresh:
                      "Read The Room keeps the experience focused and easy to follow.",
                },
              ].map((item) => (
                  <article
                      key={item.old}
                      className="rounded-[1.5rem] border border-border bg-card p-5 shadow-sm"
                  >
                    <p className="mb-4 text-sm leading-6 text-muted-foreground">
                      {item.old}
                    </p>

                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                        <CheckCircle2 size={17} />
                      </div>

                      <p className="font-serif text-xl font-bold leading-7 text-foreground">
                        {item.fresh}
                      </p>
                    </div>
                  </article>
              ))}
            </div>
          </div>
        </section>


        <section id="try" className="px-6 py-20">
          <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-[var(--accent)] p-8 text-center text-white md:p-14">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/15">
              <QrCode size={30} />
            </div>

            <h2 className="font-serif text-4xl font-bold md:text-5xl">
              Ready to try it with your club?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/85">
              Test the app, watch the product video and share Read The Room with
              your reading group.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                  href={APP_URL}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-medium text-[var(--accent)] transition hover:opacity-90"
              >
                Try the app
                <ArrowRight size={18} />
              </a>

              <a
                  href="https://instagram.com/readtheroom.app"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 font-medium text-white transition hover:bg-white/10"
              >
                <Instagram size={18} />
                @readtheroom.app
              </a>
            </div>
          </div>
        </section>
        <section id="built" className="bg-surface px-6 py-14">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
              <Library size={26} />
            </div>

            <h2 className="font-serif text-3xl font-bold md:text-4xl">
              Built as a focused MVP
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-muted-foreground">
              Read The Room is built with React Native, Supabase and Open Library.
              The MVP focuses on calm design, explainable recommendations and
              privacy-aware reading data.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["React Native", "Supabase", "Open Library", "TypeScript"].map(
                  (tech) => (
                      <span
                          key={tech}
                          className="rounded-full border border-border bg-card px-5 py-2 text-sm text-muted-foreground"
                      >
                  {tech}
                </span>
                  )
              )}
            </div>
          </div>
        </section>


        {selectedScreen && (
            <PreviewModal
                screen={selectedScreen}
                onClose={() => setSelectedScreen(null)}
            />
        )}

        <footer className="border-t border-border px-6 py-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
            <p className="font-serif text-lg font-bold text-foreground">
              Read The Room
            </p>
            <p>Your book club, without the chaos.</p>
          </div>
        </footer>
      </main>
  );
}

function Nav() {
  return (
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border bg-background/85 px-6 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2 font-serif text-lg font-bold">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[var(--accent)] text-white">
            <BookOpen size={18} />
          </span>
            Read The Room
          </a>

          <div className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a href="#problem" className="hover:text-foreground">
              Problem
            </a>
            <a href="#features" className="hover:text-foreground">
              Features
            </a>
            <a href="#preview" className="hover:text-foreground">
              Preview
            </a>
            <a href="#different" className="hover:text-foreground">
              Different
            </a>
            <a href="#try" className="hover:text-foreground">
              Try it
            </a>
          </div>

          <a
              href={APP_URL}
              className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
          >
            Try the app
          </a>
        </div>
      </nav>
  );
}

function PhoneFrame({ image, title }: { image: string; title: string }) {
  return (
      <div className="mx-auto max-w-[290px] rounded-[2.4rem] border-[9px] border-foreground bg-foreground p-2 shadow-2xl">
        <div className="overflow-hidden rounded-[1.65rem] bg-background">
          <Screenshot src={image} alt={title} size="large" />
        </div>
      </div>
  );
}

function Screenshot({
                      src,
                      alt,
                      size = "default",
                    }: {
  src: string;
  alt: string;
  size?: "small" | "default" | "large";
}) {
  const [failed, setFailed] = useState(false);

  const heightClass =
      size === "small"
          ? "h-[300px]"
          : size === "large"
              ? "h-[560px]"
              : "h-[420px]";

  if (failed) {
    return (
        <div
            className={`flex ${heightClass} flex-col items-center justify-center bg-[var(--accent-soft)] p-8 text-center`}
        >
          <BookOpen className="mb-4 text-[var(--accent)]" size={34} />
          <p className="font-serif text-2xl font-bold text-foreground">{alt}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Add your screenshot here
          </p>
        </div>
    );
  }

  return (
      <div
          className={`flex ${heightClass} items-center justify-center bg-background p-3`}
      >
        <img
            src={src}
            alt={alt}
            onError={() => setFailed(true)}
            className="h-full w-auto rounded-[1.25rem] object-contain"
        />
      </div>
  );
}

function PreviewModal({
                        screen,
                        onClose,
                      }: {
  screen: PreviewScreen;
  onClose: () => void;
}) {
  return (
      <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-6"
          onClick={onClose}
      >
        <div
            className="relative grid max-h-[90vh] w-full max-w-4xl gap-6 overflow-hidden rounded-[2rem] border border-[#E7D9D4] bg-[#FFFFFF] p-5 text-[#2B1F1D] shadow-2xl md:grid-cols-[0.85fr_1.15fr]"
            onClick={(event) => event.stopPropagation()}
        >
          <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#FEF8F3] text-xl leading-none text-[#2B1F1D] shadow-sm transition hover:bg-[#F6D3CB]"
              aria-label="Close preview"
          >
            ×
          </button>

          <div className="flex items-center justify-center rounded-[1.5rem] bg-[#FEF8F3] p-4">
            <img
                src={screen.image}
                alt={screen.title}
                className="max-h-[68vh] w-auto rounded-[1.25rem] object-contain"
            />
          </div>

          <div className="flex flex-col justify-center p-2 pr-10 md:p-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#7B6A67]">
              App screen
            </p>

            <h3 className="font-serif text-4xl font-bold text-[#2B1F1D] md:text-5xl">
              {screen.title}
            </h3>

            <p className="mt-5 max-w-md leading-8 text-[#7B6A67]">
              {screen.body}
            </p>

            <p className="mt-8 text-sm text-[#7B6A67]">
              Click outside this preview to close.
            </p>
          </div>
        </div>
      </div>
  );
}