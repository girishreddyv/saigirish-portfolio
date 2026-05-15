"use client";

import { FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Sparkles,
  Terminal,
  UserRound
} from "lucide-react";
import {
  architectureFlows,
  certifications,
  experience,
  impactStats,
  operatingPrinciples,
  profile,
  projects,
  skillGroups
} from "@/data/profile";

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const accentMap = {
  cyan: "border-cyan-300/35 bg-cyan-300/10 text-cyan-100",
  green: "border-emerald-300/35 bg-emerald-300/10 text-emerald-100",
  amber: "border-amber-300/35 bg-amber-300/10 text-amber-100",
  rose: "border-rose-300/35 bg-rose-300/10 text-rose-100"
};

type ContactState = "idle" | "sending" | "sent" | "error";

function SectionHeader({
  eyebrow,
  title,
  body
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={sectionVariants}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mx-auto mb-10 max-w-3xl text-center"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/80">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-slate-300">{body}</p>
    </motion.div>
  );
}

function AnimatedBackground() {
  const nodes = useMemo(
    () => [
      { x: "8%", y: "18%", s: 1.1 },
      { x: "22%", y: "62%", s: 0.8 },
      { x: "45%", y: "26%", s: 0.9 },
      { x: "62%", y: "68%", s: 1.2 },
      { x: "82%", y: "20%", s: 0.75 },
      { x: "91%", y: "76%", s: 0.95 }
    ],
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="grid-bg absolute inset-0" />
      <motion.div
        className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full border border-cyan-200/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-16 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full border border-emerald-200/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-55">
        <defs>
          <linearGradient id="line" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ee4ff" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#8cf8b8" stopOpacity="0.22" />
          </linearGradient>
        </defs>
        <path d="M 80 170 C 230 80, 360 250, 520 150 S 840 110, 1050 260" fill="none" stroke="url(#line)" strokeWidth="1.5" />
        <path d="M 110 520 C 340 380, 520 620, 740 430 S 980 520, 1140 360" fill="none" stroke="url(#line)" strokeWidth="1.5" />
      </svg>
      {nodes.map((node, index) => (
        <motion.span
          key={`${node.x}-${node.y}`}
          className="absolute h-2.5 w-2.5 rounded-full bg-cyan-200 shadow-[0_0_28px_rgba(78,228,255,0.75)]"
          style={{ left: node.x, top: node.y, scale: node.s }}
          animate={{ opacity: [0.35, 1, 0.35], y: [0, -14, 0] }}
          transition={{ duration: 3.6 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function Hero() {
  const headlines = ["AI Systems", "RAG Pipelines", "MLOps Workflows", ".NET Cloud APIs"];

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden px-5 py-24 sm:px-8 lg:px-10">
      <AnimatedBackground />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.03fr_0.97fr] lg:items-center">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
          <motion.div
            variants={sectionVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/8 px-4 py-2 text-sm text-cyan-100 shadow-lg shadow-cyan-950/20"
          >
            <Sparkles className="h-4 w-4" />
            Building production AI platforms with backend depth
          </motion.div>
          <motion.h1 variants={sectionVariants} className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </motion.h1>
          <motion.div variants={sectionVariants} className="mt-5 min-h-12 overflow-hidden text-2xl font-semibold text-gradient sm:text-3xl">
            <motion.div animate={{ y: ["0%", "-25%", "-50%", "-75%", "0%"] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}>
              {headlines.map((item) => (
                <div key={item} className="h-12">
                  {item}
                </div>
              ))}
            </motion.div>
          </motion.div>
          <motion.p variants={sectionVariants} className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {profile.summary}
          </motion.p>
          <motion.div variants={sectionVariants} className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.resumePath}
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
            >
              <Download className="h-4 w-4" />
              Download resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-200/25 bg-cyan-200/10 px-5 py-3 text-sm font-semibold text-cyan-50 transition hover:bg-cyan-200/18"
            >
              <MessageSquare className="h-4 w-4" />
              Contact
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white transition hover:border-cyan-200/45 hover:bg-white/12"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            {profile.github ? (
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white transition hover:border-cyan-200/45 hover:bg-white/12"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            ) : null}
          </motion.div>
          <motion.div variants={sectionVariants} className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
            {profile.targetRoles.map((role) => (
              <span key={role} className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                {role}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
          className="strong-glass relative overflow-hidden rounded-[2rem] p-5 sm:p-6"
        >
          <div className="absolute right-6 top-6 flex gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-300/80" />
            <span className="h-3 w-3 rounded-full bg-amber-300/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-300/80" />
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 font-[var(--font-mono)]">
            <div className="mb-6 flex items-center gap-3 text-sm text-slate-400">
              <Terminal className="h-4 w-4 text-cyan-200" />
              portfolio.ai/system-profile
            </div>
            <div className="space-y-5 text-sm">
              <CodeLine label="focus" value="RAG + MLOps + backend systems" />
              <CodeLine label="cloud" value="AWS, Azure, CI/CD, secure APIs" />
              <CodeLine label="impact" value="10K+ docs, 50K+ daily transactions" />
              <CodeLine label="stack" value="Python, C#, .NET, Angular, LangChain" />
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {impactStats.map((stat) => (
                <div key={stat.value} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="text-2xl font-semibold text-white">{stat.value}</div>
                  <div className="mt-2 text-xs leading-5 text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <a href="#about" className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-slate-400" aria-label="Scroll to about">
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}

function CodeLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[5.5rem_1fr] gap-3">
      <span className="text-emerald-200">{label}</span>
      <span className="text-slate-300">= &quot;{value}&quot;</span>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="About"
          title="AI systems engineer with production backend instincts"
          body="The portfolio is shaped around the work recruiters and engineering leaders scan for: scope, impact, reliability, and the ability to ship AI systems beyond notebooks."
        />
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={sectionVariants}
            className="glass rounded-3xl p-6 sm:p-8"
          >
            <p className="text-lg leading-9 text-slate-200">{profile.summary}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {operatingPrinciples.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <Icon className="mb-4 h-5 w-5 text-cyan-200" />
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{item.body}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={sectionVariants}
            className="glass rounded-3xl p-6 sm:p-8"
          >
            <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold text-white">
              <MapPin className="h-5 w-5 text-emerald-200" />
              Current signal
            </h3>
            <div className="space-y-4">
              {[
                "AI-driven applications from requirements through production release.",
                "RAG pipelines with LangChain, vector databases, and retrieval quality tuning.",
                "MLOps workflows using MLflow, Kubeflow, and Airflow.",
                "Secure .NET APIs, Azure AD, MSAL, background workers, and high-volume integrations.",
                "CI/CD pipelines across DEV, TEST, UAT, and PROD with measurable reliability gains."
              ].map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-200" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Experience"
          title="A timeline of AI, backend, and cloud delivery"
          body="Each role emphasizes the engineering surface that matters for AI platform work: dependable services, measurable outcomes, clean delivery pipelines, and cross-functional execution."
        />
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-200/0 via-cyan-200/40 to-cyan-200/0 md:block" />
          <div className="space-y-6">
            {experience.map((job, index) => (
              <motion.article
                key={`${job.company}-${job.role}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="glass relative rounded-3xl p-6 md:ml-12"
              >
                <span className="absolute -left-[3.25rem] top-8 hidden h-8 w-8 items-center justify-center rounded-full border border-cyan-200/35 bg-slate-950 text-cyan-100 md:flex">
                  <BriefcaseBusiness className="h-4 w-4" />
                </span>
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200/75">{job.theme}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{job.role}</h3>
                    <p className="mt-1 text-slate-300">{job.company} - {job.location}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">{job.duration}</span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-white/[0.06] px-3 py-1.5 text-xs text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-300">
                  {job.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3">
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-cyan-200" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Projects"
          title="Production work presented as engineering case studies"
          body="No empty demo tiles. These cards turn real resume work into recruiter-readable systems stories with architecture, stack, and impact upfront."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.article
                key={project.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={sectionVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="glass group overflow-hidden rounded-3xl p-6"
              >
                <div className="mb-6 flex min-h-56 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/75 p-5">
                  <div className="relative w-full max-w-md">
                    <div className="absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-cyan-200/0 via-cyan-200/50 to-emerald-200/0" />
                    <div className="relative grid grid-cols-3 gap-3">
                      {project.highlights.slice(0, 3).map((item, index) => (
                        <motion.div
                          key={item}
                          className="rounded-2xl border border-cyan-200/15 bg-cyan-200/[0.06] p-3 text-center text-xs leading-5 text-cyan-50"
                          animate={{ y: [0, index % 2 === 0 ? -8 : 8, 0] }}
                          transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
                        >
                          {item}
                        </motion.div>
                      ))}
                    </div>
                    <div className="mx-auto mt-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-200/20 bg-emerald-200/10 text-emerald-100">
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200/75">{project.type}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                  </div>
                  <span className="rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1 text-xs text-cyan-100">{project.metric}</span>
                </div>
                <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
                <div className="mt-5 grid gap-2">
                  {project.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-emerald-200" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full bg-white/[0.06] px-3 py-1.5 text-xs text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Skills"
          title="A stack built for AI platforms that actually ship"
          body="The skill system is categorized for fast scanning by recruiters while still showing enough depth for engineering interviews."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={sectionVariants}
                className="glass rounded-3xl p-6"
              >
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="flex items-center gap-3 text-xl font-semibold text-white">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-200/20 bg-cyan-200/10 text-cyan-100">
                      <Icon className="h-5 w-5" />
                    </span>
                    {group.title}
                  </h3>
                  <span className="text-sm text-slate-400">{group.skills.length} skills</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, index) => (
                    <span key={skill} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-slate-300">
                      <span className="mr-2 text-cyan-200">{String(index + 1).padStart(2, "0")}</span>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Architecture() {
  return (
    <section id="architecture" className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Architecture"
          title="Interactive systems map for AI and cloud delivery"
          body="The architecture section gives technical reviewers a visual scan of the systems Sai has been building: RAG, OCR, CI/CD, and secure cloud APIs."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {architectureFlows.map((flow) => {
            const Icon = flow.icon;
            const accent = accentMap[flow.accent as keyof typeof accentMap];
            return (
              <motion.div
                key={flow.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={sectionVariants}
                className="glass rounded-3xl p-6"
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${accent}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="text-xl font-semibold text-white">{flow.title}</h3>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  {flow.steps.map((step, index) => (
                    <div key={step} className="relative rounded-2xl border border-white/10 bg-slate-950/55 p-4">
                      <div className="mb-4 flex items-center justify-between">
                        <span className="font-[var(--font-mono)] text-xs text-slate-500">{String(index + 1).padStart(2, "0")}</span>
                        <motion.span
                          className="h-2 w-2 rounded-full bg-cyan-200"
                          animate={{ opacity: [0.35, 1, 0.35], scale: [1, 1.5, 1] }}
                          transition={{ duration: 2.2, delay: index * 0.22, repeat: Infinity }}
                        />
                      </div>
                      <p className="text-sm font-medium text-slate-200">{step}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Certifications"
          title="Cloud credentials aligned with platform engineering"
          body="The portfolio surfaces active AWS credentials and leaves room for Azure certifications as they are completed."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {certifications.map((cert) => (
            <motion.article
              key={cert.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={sectionVariants}
              className="glass rounded-3xl p-6"
            >
              <Award className="mb-5 h-8 w-8 text-amber-200" />
              <p className="text-sm text-slate-400">{cert.issuer}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{cert.title}</h3>
              <p className="mt-3 text-sm text-emerald-200">{cert.status}</p>
              {cert.url ? (
                <a href={cert.url} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-100 hover:text-white">
                  View credential
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : (
                <p className="mt-6 text-sm text-slate-400">Credential link will be added after completion.</p>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [status, setStatus] = useState<ContactState>("idle");
  const [error, setError] = useState("");
  const [startedAt] = useState(() => Date.now());

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      company: String(form.get("company") || ""),
      message: String(form.get("message") || ""),
      website: String(form.get("website") || ""),
      startedAt
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Message could not be sent.");
      }

      setStatus("sent");
      event.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Message could not be sent.");
    }
  }

  return (
    <section id="contact" className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Contact"
          title="Build AI systems, platform workflows, and backend products"
          body="Use the form for recruiter outreach, engineering opportunities, AI platform work, MLOps roles, or backend systems conversations."
        />
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="glass rounded-3xl p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-white">Direct links</h3>
            <div className="mt-6 space-y-3">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-slate-200 transition hover:bg-white/[0.08]">
                <Mail className="h-5 w-5 text-cyan-200" />
                {profile.email}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-slate-200 transition hover:bg-white/[0.08]">
                <Linkedin className="h-5 w-5 text-cyan-200" />
                LinkedIn
              </a>
              {profile.github ? (
                <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-slate-200 transition hover:bg-white/[0.08]">
                  <Github className="h-5 w-5 text-cyan-200" />
                  GitHub
                </a>
              ) : (
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-slate-400">
                  <Github className="h-5 w-5 text-slate-500" />
                  Add NEXT_PUBLIC_GITHUB_URL to enable GitHub link
                </div>
              )}
              <a href={profile.resumePath} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-slate-200 transition hover:bg-white/[0.08]">
                <Download className="h-5 w-5 text-cyan-200" />
                Download resume
              </a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="glass rounded-3xl p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-slate-300">
                Name
                <span className="relative">
                  <UserRound className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                  <input name="name" required minLength={2} className="w-full rounded-2xl border border-white/10 bg-slate-950/55 px-11 py-3 text-white outline-none transition focus:border-cyan-200/60" />
                </span>
              </label>
              <label className="grid gap-2 text-sm text-slate-300">
                Email
                <span className="relative">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                  <input name="email" type="email" required className="w-full rounded-2xl border border-white/10 bg-slate-950/55 px-11 py-3 text-white outline-none transition focus:border-cyan-200/60" />
                </span>
              </label>
            </div>
            <label className="mt-4 grid gap-2 text-sm text-slate-300">
              Company or role
              <input name="company" className="w-full rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-white outline-none transition focus:border-cyan-200/60" />
            </label>
            <label className="mt-4 grid gap-2 text-sm text-slate-300">
              Message
              <textarea
                name="message"
                required
                minLength={20}
                rows={6}
                className="w-full resize-none rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 text-white outline-none transition focus:border-cyan-200/60"
              />
            </label>
            <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-100 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white disabled:cursor-wait disabled:opacity-70"
              >
                {status === "sending" ? "Sending..." : "Send message"}
                <Send className="h-4 w-4" />
              </button>
              {status === "sent" ? <p className="text-sm text-emerald-200">Message received. Thanks for reaching out.</p> : null}
              {status === "error" ? <p className="text-sm text-rose-200">{error}</p> : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Navigation() {
  const items = ["about", "experience", "projects", "skills", "architecture", "contact"];

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-slate-950/55 px-5 py-3 backdrop-blur-2xl sm:px-8 lg:px-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-3 font-semibold text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl border border-cyan-200/25 bg-cyan-200/10 text-cyan-100">SG</span>
          <span className="hidden sm:inline">{profile.shortName}</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {items.map((item) => (
            <a key={item} href={`#${item}`} className="rounded-full px-3 py-2 text-sm capitalize text-slate-300 transition hover:bg-white/8 hover:text-white">
              {item}
            </a>
          ))}
        </div>
        <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-cyan-200/25 bg-cyan-200/10 px-4 py-2 text-sm font-semibold text-cyan-50">
          <Mail className="h-4 w-4" />
          <span className="hidden sm:inline">Reach out</span>
        </a>
      </nav>
    </header>
  );
}

function JsonLd() {
  const sameAs = [profile.linkedin, profile.github].filter(Boolean);
  const json = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Software Engineer, AI Systems Engineer",
    email: `mailto:${profile.email}`,
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://saigirish.dev",
    sameAs,
    knowsAbout: ["RAG", "MLOps", ".NET", "AWS", "Azure", "LangChain", "OCR", "CI/CD", "Angular", "Microservices"]
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}

export function Portfolio() {
  return (
    <>
      <JsonLd />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Architecture />
        <Certifications />
        <Contact />
      </main>
      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500 sm:px-8 lg:px-10">
        <p>Built for AI engineer, MLOps, AI platform, and backend systems opportunities.</p>
      </footer>
    </>
  );
}
