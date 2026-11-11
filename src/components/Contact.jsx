import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { profile } from '../data/portfolio';
import { GithubMark, LinkedInMark } from './BrandIcons';

export default function Contact() {
  return <footer className="contact-section" id="contact"><div className="section-shell"><div className="contact-topline"><span>HAVE A GOOD PROBLEM?</span><span>LET’S MAKE SOMETHING USEFUL.</span></div><div className="contact-main"><div><div className="eyebrow"><span className="eyebrow-line"/> NEXT CHAPTER</div><h2>Let’s build<br /><span>what’s next.</span></h2><p>I’m open to junior AI and machine-learning roles, internships, and thoughtful collaborations.</p><a className="contact-phone" href={`tel:${profile.phone.replaceAll(' ', '')}`}><Phone size={14}/>{profile.phone}</a></div><a className="contact-button" href={`mailto:${profile.email}`}><Mail size={22}/><span>START A CONVERSATION</span><ArrowUpRight size={22}/></a></div><div className="footer-bottom"><a className="footer-brand" href="#home">DANISH<span>.</span></a><span>DESIGNED & BUILT WITH CURIOSITY · 2026</span><div className="footer-socials"><a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubMark size={17}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInMark size={17}/></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={17}/></a></div></div></div></footer>;
}



