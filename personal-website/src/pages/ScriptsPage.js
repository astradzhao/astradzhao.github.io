import React from 'react';
import './Pages.css';
import './ScriptsPage.css';

const ArrowIcon = () => (
  <svg
    className="ps-arrow"
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
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

function ScriptsPage() {
  const research = [
    {
      kind: "Conference Paper",
      venue: "ICLR 2026",
      title: "Steering AR Music Generation with RFMs",
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
    { name: "Research", slug: "research", projects: research },
    { name: "Creations", slug: "creations", projects: creations }
  ];

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

          <ol className="ps-list">
            {section.projects.map((project, i) => (
              <li
                key={i}
                className="ps-item"
                data-section={section.slug}
              >
                <span className="ps-item-index" aria-hidden="true">
                  {(i + 1).toString().padStart(2, '0')}
                </span>

                <div className="ps-item-content">
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
                      {project.isLive && (
                        <span className="ps-tag-live" aria-label="Live deployed project">
                          <span className="ps-live-dot" aria-hidden="true"></span>
                          Live
                        </span>
                      )}
                    </div>
                    <span className="ps-item-date">{project.date}</span>
                  </div>

                  <h3 className="ps-item-title">{project.title}</h3>

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
                      >
                        <span>{link.label}</span>
                        <ArrowIcon />
                      </a>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}

export default ScriptsPage;
