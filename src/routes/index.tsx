import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowDown,
  Check,
  Users,
  Mail,
  Database,
  Contact,
  BarChart3,
  Workflow,
} from "lucide-react";
import logo from "@/assets/flowfix-logo.png";

const EMAIL = "sarthak.flowfix@gmail.com";
const MAILTO = `mailto:${EMAIL}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FlowFix — Practical automation for repetitive business work" },
      {
        name: "description",
        content:
          "FlowFix helps businesses identify repetitive work and replace manual processes with practical automation — lead handling, email workflows, data entry, CRM, reports.",
      },
      {
        property: "og:title",
        content: "FlowFix — Practical automation for repetitive business work",
      },
      {
        property: "og:description",
        content:
          "Automate the work your team repeats every day. Find the repetitive work, fix the workflow, keep it running.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "What We Automate", href: "#automate" },
  { label: "How It Works", href: "#how" },
  { label: "Contact", href: "#contact" },
];

const MANUAL_TASKS = [
  "Copying data between systems",
  "Processing repetitive emails",
  "Updating spreadsheets",
  "Sending follow-ups",
  "Creating routine reports",
  "Moving information between tools",
  "Repeating administrative tasks",
];

const CAPABILITIES = [
  {
    icon: Users,
    title: "Lead Handling",
    body: "Capture, organize, qualify, and route incoming leads.",
  },
  {
    icon: Mail,
    title: "Email Workflows",
    body: "Automate repetitive email actions and follow-ups.",
  },
  {
    icon: Database,
    title: "Data Entry",
    body: "Move information between systems without repetitive manual input.",
  },
  {
    icon: Contact,
    title: "CRM Workflows",
    body: "Automate updates, notifications, and repetitive CRM tasks.",
  },
  {
    icon: BarChart3,
    title: "Reports",
    body: "Collect information and generate routine reports automatically.",
  },
  {
    icon: Workflow,
    title: "Internal Processes",
    body: "Connect tools and automate repetitive team workflows.",
  },
];

const STEPS = [
  { n: "01", title: "Find", body: "Identify repetitive work that consumes time." },
  {
    n: "02",
    title: "Fix",
    body: "Design a practical automated workflow around the existing process.",
  },
  {
    n: "03",
    title: "Flow",
    body: "Connect the tools and let the workflow run with less manual effort.",
  },
];

const WHY = [
  {
    title: "Practical, Not Hype",
    body: "Automation built around actual business processes.",
  },
  {
    title: "Built Around Your Workflow",
    body: "The goal is to improve existing operations rather than force businesses into unnecessary systems.",
  },
  {
    title: "Simple & Focused",
    body: "Find the repetitive work. Fix the workflow. Keep it running.",
  },
];

const SOCIALS = [
  { label: "X", href: "https://x.com/FlowFixAI" },
  { label: "Instagram", href: "https://www.instagram.com/flowfix.ai_/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/flowfix-x-477298438/" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61594465141611" },
];

function EmailButton({
  children = "Email FlowFix",
  variant = "solid",
  className = "",
}: {
  children?: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex h-11 items-center gap-2 rounded-lg px-5 text-sm font-medium transition-all duration-200";
  const styles =
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-lift"
      : "border border-border-strong bg-background hover:bg-muted";
  return (
    <a href={MAILTO} className={`${base} ${styles} ${className}`}>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </a>
  );
}

function WorkflowDiagram() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8">
      <div className="grid gap-6 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
        <div className="rounded-xl border border-border bg-surface p-5">
          <p className="eyebrow">Manual</p>
          <ul className="mt-4 space-y-2.5">
            {["Email arrives", "Copy into CRM", "Update sheet", "Send follow-up"].map(
              (s, i) => (
                <li key={s} className="flex items-center gap-3 text-sm">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-border bg-background font-mono text-[11px] text-muted-foreground">
                    {i + 1}
                  </span>
                  <span className="text-muted-foreground">{s}</span>
                </li>
              ),
            )}
          </ul>
          <p className="mt-4 border-t border-border pt-3 text-xs text-muted-foreground">
            Four manual steps, repeated daily
          </p>
        </div>

        <div className="flex items-center justify-center">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground">
            <ArrowRight className="hidden h-4 w-4 sm:block" />
            <ArrowDown className="h-4 w-4 sm:hidden" />
          </span>
        </div>

        <div className="rounded-xl border border-accent/25 bg-accent-soft/60 p-5">
          <p className="eyebrow text-accent">Automated</p>
          <div className="mt-4 flex items-center gap-3 text-sm">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground">
              <Check className="h-3.5 w-3.5" />
            </span>
            <span className="font-medium">One workflow, triggered on arrival</span>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Record created and routed</li>
            <li>Systems stay in sync</li>
            <li>Follow-up sent on time</li>
          </ul>
          <p className="mt-4 border-t border-accent/20 pt-3 text-xs text-muted-foreground">
            Zero manual steps
          </p>
        </div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen scroll-smooth bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="container-tight flex h-16 items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-2.5">
            <img src={logo} alt="FlowFix" width={28} height={28} className="h-7 w-7" />
            <span className="text-[15px] font-semibold tracking-tight">FlowFix</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-foreground">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={MAILTO}
            className="inline-flex h-9 items-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Email FlowFix
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="grid-backdrop pointer-events-none absolute inset-0" aria-hidden />
          <div className="container-tight relative py-20 md:py-28">
            <p className="eyebrow">Workflow automation</p>
            <h1 className="mt-5 max-w-3xl text-4xl leading-[1.08] font-semibold sm:text-5xl md:text-6xl">
              AI Automation Is Changing How Businesses Work.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              FlowFix helps businesses identify repetitive work and replace manual
              processes with practical automation.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <EmailButton />
              <a
                href="#automate"
                className="inline-flex h-11 items-center rounded-lg border border-border-strong bg-background px-5 text-sm font-medium transition-colors hover:bg-muted"
              >
                What we automate
              </a>
            </div>
            <div className="mt-14 md:mt-16">
              <WorkflowDiagram />
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="border-b border-border bg-surface">
          <div className="container-tight grid gap-12 py-20 md:py-24 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <p className="eyebrow">The problem</p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Too Much Business Work Still Happens Manually.
              </h2>
              <p className="mt-5 text-muted-foreground">
                Most teams lose hours every week to tasks that never change. The work is
                necessary — the manual effort usually isn&apos;t.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-2 font-mono text-xs tracking-wider uppercase">
                <span className="rounded-md border border-border bg-background px-3 py-1.5 text-muted-foreground">
                  Repetitive work
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="rounded-md border border-border bg-background px-3 py-1.5 text-muted-foreground">
                  Wasted time
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="rounded-md border border-accent/25 bg-accent-soft px-3 py-1.5 text-accent">
                  Automation opportunity
                </span>
              </div>
            </div>
            <ul className="grid gap-px self-start overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
              {MANUAL_TASKS.map((t) => (
                <li key={t} className="bg-card px-5 py-4 text-sm text-muted-foreground">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What we automate */}
        <section id="automate" className="border-b border-border">
          <div className="container-tight py-20 md:py-24">
            <p className="eyebrow">What we automate</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold md:text-4xl">
              Practical automation areas
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Not every process should be automated. These are the areas where it usually
              pays off.
            </p>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {CAPABILITIES.map((c) => (
                <article
                  key={c.title}
                  className="rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent-soft text-accent">
                    <c.icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 text-base font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="border-b border-border bg-surface">
          <div className="container-tight py-20 md:py-24">
            <p className="eyebrow">How it works</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Find. Fix. Flow.</h2>
            <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
              {STEPS.map((s) => (
                <li key={s.n} className="bg-card p-7">
                  <span className="font-mono text-xs text-accent">{s.n}</span>
                  <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Who we help + Why */}
        <section className="border-b border-border">
          <div className="container-tight grid gap-14 py-20 md:py-24 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div>
              <p className="eyebrow">Who FlowFix helps</p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Small and mid-sized businesses with repetitive operations.
              </h2>
              <p className="mt-5 text-muted-foreground">
                FlowFix works best with teams that run the same operational workflows
                every week — sales handoffs, admin, reporting and internal coordination.
              </p>
              <p className="mt-4 text-muted-foreground">
                The exact automation depends on the business and the tools already in
                use, so it starts with a look at how the work happens today.
              </p>
            </div>
            <div>
              <p className="eyebrow">Why FlowFix</p>
              <div className="mt-6 space-y-px overflow-hidden rounded-xl border border-border bg-border">
                {WHY.map((w) => (
                  <div key={w.title} className="bg-card p-6">
                    <h3 className="text-base font-semibold">{w.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{w.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" className="bg-surface">
          <div className="container-tight py-20 md:py-24">
            <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-card md:p-16">
              <h2 className="mx-auto max-w-2xl text-3xl font-semibold md:text-5xl">
                What could your business stop doing manually?
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-muted-foreground">
                Tell us about the repetitive work slowing your team down.
              </p>
              <div className="mt-9 flex justify-center">
                <EmailButton />
              </div>
              <p className="mt-5 font-mono text-sm text-muted-foreground">{EMAIL}</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-surface">
        <div className="container-tight flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src={logo}
                alt=""
                width={24}
                height={24}
                className="h-6 w-6"
                loading="lazy"
              />
              <p className="text-sm font-semibold">FlowFix</p>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Practical automation for repetitive business work.
            </p>
            <a
              href={MAILTO}
              className="mt-3 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {EMAIL}
            </a>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-foreground"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
