import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolio';
import { usePointerTilt } from '../utils/motion';

import { GithubMark } from './BrandIcons';

const publicAsset = (path) => `${import.meta.env.BASE_URL}${path}`;
function ProjectVisual({ project }) {
  if (project.number === '04') {
    return (
      <div className="project-visual visual-mint project-visual-imdb" aria-label="Animated IMDb sentiment-analysis workflow">
        <img src={publicAsset('imdb-sentiment-flow.png')} alt="3D visualization of IMDb movie reviews flowing through sentiment analysis into positive and negative results" loading="lazy" />
        <span className="imdb-flow-glow" aria-hidden="true" />
      </div>
    );
  }  if (project.number === '06') {
    return (
      <div className="project-visual visual-lime project-visual-mindsense">
        <iframe src={publicAsset('mindsense-3d-clean.html')} title="Interactive 3D MindSense animation" loading="lazy" />
      </div>
    );
  }  if (project.number === '05') {
    return (
      <div className="project-visual visual-lime project-visual-agent">
        <iframe src={publicAsset('personal-ai-agent-3d-clean.html')} title="Interactive 3D Personal AI Agent animation" loading="lazy" />
      </div>
    );
  }  if (project.number === '03') {
    return (
      <div className="project-visual visual-orange project-visual-spam-flow" aria-label="Animated spam classification workflow">
        <img src={publicAsset('spam-classifier-flow.png')} alt="Email messages flowing through an AI spam classifier into spam and ham folders" loading="lazy" />
        <span className="spam-flow-glow" aria-hidden="true" />
      </div>
    );
  }
  if (project.number === '02') {
    return (
      <div className="project-visual visual-mint project-visual-pdf-chatbot">
        <iframe src={publicAsset('pdf-chatbot-3d-clean.html')} title="Interactive 3D PDF chatbot animation" loading="lazy" />
      </div>
    );
  }

  if (project.number === '01') {
    return (
      <div className="project-visual visual-mint project-visual-pipeline">
        <iframe src={publicAsset('parallax-rag-3d-clean.html')} title="Interactive 3D Parallax RAG pipeline animation" loading="lazy" />
      </div>
    );
  }

  return (
    <div className={`project-visual visual-${project.color}`}>
      <div className="visual-topline"><span>DF / PROJECT {project.number}</span><span>{project.category}</span></div>
      <div className={`visual-art art-${project.color}`} aria-hidden="true">
        <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-orbit orbit-three" />
        <div className="art-core"><span>{project.symbol}</span></div>
        <div className="art-spark spark-one" /><div className="art-spark spark-two" />
      </div>
      <div className="visual-bottomline"><span>{project.metric}</span><span>{project.href ? 'OPEN PROJECT ↗' : 'PROJECT HIGHLIGHT'}</span></div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  const visualRef = useRef(null);
  const tiltHandlers = usePointerTilt(visualRef, 6);
  return (
    <article className={`project-row reveal ${index % 2 ? 'project-row-reverse' : ''}`} style={{ '--reveal-delay': `${(index % 2) * 100}ms` }}>
      {project.number !== '01' && project.number !== '02' && project.number !== '04' && project.number !== '05' && project.number !== '06' && project.href ? <a className="project-visual-link" ref={visualRef} {...tiltHandlers} href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`}><ProjectVisual project={project} /></a> : <div className="project-visual-link"><ProjectVisual project={project} /></div>}
      <div className="project-copy">
        <div className="project-meta"><span>{project.number}</span><span>{project.category}</span></div>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <p className="project-details">{project.details}</p>
        <div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
        {project.href ? <a className="project-link" href={project.href} target="_blank" rel="noreferrer"><GithubMark size={15} /> VIEW PROJECT <ArrowUpRight size={14} /></a> : <span className="project-link project-link-muted">PROJECT SUMMARY</span>}
      </div>
    </article>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);
  return (
    <section className="work-section" id="work">
      <div className="section-shell">
        <div className="section-heading reveal"><div><div className="eyebrow"><span className="eyebrow-line" /> SELECTED WORK / 2024—26</div><h2>Ideas, made<br /><span>tangible.</span></h2></div><p className="section-lede">A few things I’ve built across retrieval, language, and intelligent tools. Each project is a step toward systems people can actually use.</p></div>
        <div className="projects-list">{featured.map((project, index) => <ProjectCard key={project.number} project={project} index={index} />)}</div>
        <div className="more-work">
          <div className="more-heading"><span>MORE EXPERIMENTS</span><span>03 PROJECTS</span></div>
          <div className="more-grid">{more.map((project) => <a className="more-card" key={project.number} href={project.href} target="_blank" rel="noreferrer"><span className={`more-symbol more-${project.color}`}>{project.symbol}</span><span className="more-number">{project.number} / {project.category}</span><strong>{project.title}</strong><span className="more-tech">{project.stack.join(' · ')}</span><ArrowUpRight className="more-arrow" size={17} /></a>)}</div>
        </div>
        <p className="metrics-note">*Performance figures are as reported in the linked project README; results depend on the documented dataset and split.</p>
      </div>
    </section>
  );
}


