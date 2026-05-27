import React, { useState, useEffect } from 'react';
import './Pages.css';
import './ScriptsPage.css';

const PICK_ME_NEIGHBORHOODS = [
  'West Village',
  'Lower East Side',
  'East Harlem',
  'Chelsea',
  'Tribeca',
  'SoHo',
  'NoMad',
  "Hell's Kitchen",
  'Chinatown',
  'Williamsburg',
  'Astoria',
  'Bushwick',
];

function PickMeCard({ project }) {
  const primary = project.links.find((l) => l.primary) || project.links[0];
  let host = '';
  try {
    host = primary ? new URL(primary.url).host.replace(/^www\./, '') : '';
  } catch (e) {
    host = '';
  }

  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % PICK_ME_NEIGHBORHOODS.length);
    }, 3000);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <a
      href={primary ? primary.url : '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="pm-card"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label={`${project.title} — open the live app at ${host}`}
    >
      <div className="pm-card-grid" aria-hidden="true" />
      <div className="pm-card-glow" aria-hidden="true" />

      <div className="pm-statusbar">
        <span className="pm-status-left">
          <span className="pm-status-dot" aria-hidden="true" />
          <span className="pm-status-text">live</span>
          <span className="pm-status-sep" aria-hidden="true">/</span>
          <span className="pm-status-url">{host}</span>
        </span>
        <span className="pm-status-right">
          <span className="pm-status-date">{project.date}</span>
          <span className="pm-status-arrow" aria-hidden="true">
            <ArrowIcon />
          </span>
        </span>
      </div>

      <div className="pm-body">
        <div className="pm-headline">
          <h3 className="pm-title">
            <span className="pm-title-word">Pick</span>
            <span className="pm-title-word pm-title-word-em">Me</span>
            <span className="pm-title-dot" aria-hidden="true">.</span>
          </h3>

          <p className="pm-pitch">
            <span className="pm-pitch-lead">tonight you're going to </span>
            <span className="pm-rolodex">
              {PICK_ME_NEIGHBORHOODS.map((name, n) => (
                <span
                  key={name}
                  className={`pm-rolodex-item${n === idx ? ' is-active' : ''}`}
                  aria-hidden={n !== idx}
                >
                  {name}
                </span>
              ))}
            </span>
          </p>
        </div>

        <p className="pm-description">{project.description}</p>
      </div>
    </a>
  );
}

const ArrowIcon = () => (
  <svg
    className="ps-arrow"
    width="11"
    height="11"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

const ChevronIcon = () => (
  <svg
    className="ps-chevron"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

function ScriptsPage() {
  const research = [
    {
      kind: "Conference Paper",
      venue: "ICLR 2026",
      title: "Steering Autoregressive Music Generation with Recursive Feature Machines",
      date: "Jan 2026",
      description: (
        <>
          First-author ICLR 2026 paper on guided music generation using recursive feature machines (RFMs) with <a href="https://zacharynovack.github.io/" target="_blank" rel="noopener noreferrer" className="default-link">Zachary Novack</a>, <a href="https://dmbeaglehole.github.io/" target="_blank" rel="noopener noreferrer" className="default-link">Daniel Beaglehole</a>, and <a href="https://cseweb.ucsd.edu/~tberg/" target="_blank" rel="noopener noreferrer" className="default-link">Prof. Taylor Berg-Kirkpatrick</a>. Our goal is to develop a way to guide music generation towards more interpretable outputs. We hope to extend this framework to <a href="https://github.com/magenta/magenta-realtime" target="_blank" rel="noopener noreferrer" className="default-link">real-time audio generation</a> in the future.
        </>
      ),
      links: [
        { url: "https://arxiv.org/abs/2510.19127", label: "View on Arxiv", primary: true },
        { url: "https://astradzhao.github.io/MusicRFMPage/", label: "Audio Samples" },
        { url: "https://github.com/astradzhao/music-rfm", label: "Source Code" }
      ]
    },
    {
      kind: "Draft",
      venue: "Pending ECCV 2026",
      title: "Benchmarking Scientific Understanding and Reasoning for Video Generation using VideoScience-Bench",
      date: "Oct 2025",
      description: "Briefly contributed to development of VideoScience-Bench, an open-source auto-eval physics reasoning benchmark for video generation.",
      links: [
        { url: `${process.env.PUBLIC_URL}/files/pdfs/videosciencebench.pdf`, label: "View Draft PDF", primary: true }
      ]
    },
    {
      kind: "Preprint",
      venue: "Arxiv",
      title: "CoT Reasoning with Sparse Autoencoder-Guided Generation",
      date: "Feb 2025",
      description: "Co-first author paper on generating better chain-of-thought reasoning with clustering and sparse autoencoders.",
      links: [
        { url: "https://arxiv.org/abs/2510.01528", label: "View on Arxiv", primary: true }
      ]
    },
    {
      kind: "Open Source",
      venue: "Hao AI Lab",
      title: "Consistency LLMs",
      date: "Jun 2024",
      description: (
        <>
          I worked with <a href="https://snyhlxde1.github.io/" target="_blank" rel="noopener noreferrer" className="default-link">Lanxiang Hu</a> and the Hao AI Lab at UCSD on the implementation of Consistency Large Language Models, specifically optimizing fine-tuning and testing its compatibility with qLoRA.
        </>
      ),
      links: [
        { url: "https://github.com/hao-ai-lab/Consistency_LLM", label: "View on GitHub", primary: true }
      ]
    }
  ];

  const creations = [
    {
      kind: "Web App",
      venue: "New York City",
      title: "Pick Me",
      date: "May 2026",
      isLive: true,
      description: "A randomized place picker for Manhattan — set your filters and let it nudge you somewhere new. For when you can't decide where to go.",
      links: [
        { url: "https://pick-me-delta.vercel.app/", label: "Try it Live", primary: true }
      ]
    }
  ];

  const sections = [
    { name: "Creations", slug: "creations", projects: creations },
    { name: "Research", slug: "research", projects: research }
  ];

  const [expandedKey, setExpandedKey] = useState(null);

  const toggle = (key) => {
    setExpandedKey((prev) => (prev === key ? null : key));
  };

  return (
    <div className='page-container-scripts'>
      {sections.map((section) => (
        <section key={section.slug} className="ps-section" data-section={section.slug}>
          <header className="ps-section-header">
            <h2 className="ps-section-label">{section.name}</h2>
            <span className="ps-section-rule" aria-hidden="true"></span>
            <span className="ps-section-count">
              {section.projects.length.toString().padStart(2, '0')}
            </span>
          </header>

          <ol className={`ps-list ${section.slug === 'creations' ? 'ps-list-creations' : ''}`}>
            {section.projects.map((project, i) => {
              const key = `${section.slug}-${i}`;

              if (section.slug === 'creations') {
                return (
                  <li key={i} className="ps-creation-row" data-section={section.slug}>
                    <PickMeCard project={project} />
                  </li>
                );
              }

              const isOpen = expandedKey === key;
              return (
                <li
                  key={i}
                  className={`ps-item ${isOpen ? 'is-open' : ''}`}
                  data-section={section.slug}
                >
                  <span className="ps-item-index" aria-hidden="true">
                    {(i + 1).toString().padStart(2, '0')}
                  </span>

                  <div className="ps-item-content">
                    <button
                      type="button"
                      className="ps-item-toggle"
                      onClick={() => toggle(key)}
                      aria-expanded={isOpen}
                      aria-controls={`${key}-body`}
                    >
                      <div className="ps-item-meta-row">
                        <div className="ps-item-tags">
                          {project.kind && (
                            <span className="ps-tag ps-tag-kind">{project.kind}</span>
                          )}
                          {project.venue && (
                            <span className="ps-tag-divider" aria-hidden="true">·</span>
                          )}
                          {project.venue && (
                            <span className="ps-tag ps-tag-venue">{project.venue}</span>
                          )}
                        </div>
                        <span className="ps-item-date">{project.date}</span>
                      </div>

                      <div className="ps-item-title-row">
                        <h3 className="ps-item-title">{project.title}</h3>
                        <span className="ps-item-chevron" aria-hidden="true">
                          <ChevronIcon />
                        </span>
                      </div>
                    </button>

                    <div
                      id={`${key}-body`}
                      className="ps-item-body"
                      aria-hidden={!isOpen}
                    >
                      <div className="ps-item-body-inner">
                        <div className="ps-item-description">
                          {project.description}
                        </div>

                        <div className="ps-item-actions">
                          {project.links.map((link, j) => (
                            <a
                              key={j}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`ps-action ${link.primary ? 'ps-action-primary' : 'ps-action-ghost'}`}
                              tabIndex={isOpen ? 0 : -1}
                            >
                              <span>{link.label}</span>
                              <ArrowIcon />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>
      ))}
    </div>
  );
}

export default ScriptsPage;
