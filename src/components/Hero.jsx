import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react';
import { profile } from '../data/portfolio';
import { GithubMark, LinkedInMark } from './BrandIcons';
import InkButton from './InkButton';

const animationUrl = `${import.meta.env.BASE_URL}skills-in-products-out.html`;

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-line" /> AI ENGINEER · ISLAMABAD, PK</div>
        <h1>Building<br /><span>intelligence</span><br />that feels<br />useful.</h1>
        <p className="hero-intro">I’m Danish — an early-career AI engineer shaping practical machine-learning and LLM products, from first experiment to working interface.</p>
        <div className="hero-actions">
          <InkButton className="hero-work-button" href="#work">Explore selected work <ArrowDown size={16} /></InkButton>
          <a className="text-link" href={`mailto:${profile.email}`}>Let’s talk <ArrowUpRight size={16} /></a>
        </div>
        <div className="hero-socials">
          <a href={profile.github} target="_blank" rel="noreferrer"><GithubMark size={16} /> GitHub <ArrowUpRight size={12} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedInMark size={16} /> LinkedIn <ArrowUpRight size={12} /></a>
          <a href={`mailto:${profile.email}`}><Mail size={16} /> Email <ArrowUpRight size={12} /></a>
        </div>
      </div>
      <div className="hero-art-wrap">
        <div className="hero-scene hero-animation" aria-label="Animated AI skills flowing into featured projects">
          <iframe src={animationUrl} title="Skills In, Products Out animation" loading="eager" />
        </div>
      </div>
      <div className="hero-index"><span>SCROLL TO EXPLORE</span><div className="index-line" /></div>
    </section>
  );
}
