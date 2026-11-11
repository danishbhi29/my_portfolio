import { GithubMark } from './BrandIcons';
import { ArrowUpRight } from 'lucide-react';
import InkButton from './InkButton';

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Danish Farman home"><span className="brand-mark">D<span>.</span></span><span className="brand-name">DANISH<br />FARMAN</span></a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#work">Work <span>01</span></a><a href="#about">About <span>02</span></a><a href="#experience">Experience <span>03</span></a><a href="#resume">Resume <span>04</span></a>
      </nav>
      <InkButton className="header-cta" href="mailto:danishfarman1910@gmail.com"><span>LET’S CONNECT</span><ArrowUpRight size={15} /></InkButton>
      <a className="header-github" href="https://github.com/danishbhi29" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubMark size={18} /></a>
    </header>
  );
}


