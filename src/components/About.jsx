import { ArrowDownRight, ArrowUpRight, BrainCircuit, Code2, Cpu, Database, Layers3, Sparkles } from 'lucide-react';
import { profile, skills, principles } from '../data/portfolio';

const icons = [BrainCircuit, Layers3, Code2, Cpu];
export function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-shell about-layout">
        <div className="about-left reveal"><div className="eyebrow"><span className="eyebrow-line" /> A LITTLE ABOUT ME</div><h2>Curious by<br /><span>nature.</span><br />Engineer by<br />practice.</h2><p>{profile.intro}</p><a href={profile.linkedin} target="_blank" rel="noreferrer" className="arrow-link">MORE ABOUT MY JOURNEY <ArrowUpRight size={15} /></a><div className="about-stamp"><span>IIUI</span><small>SOFTWARE<br />ENGINEERING<br />CLASS OF ’26</small></div></div>
        <div className="about-right">
          <div className="principles">{principles.map((item, index) => <article className="principle reveal" key={item.n} style={{ '--reveal-delay': `${index * 90}ms` }}><span>{item.n}</span><div><h3>{item.title}</h3><p>{item.text}</p></div><ArrowDownRight size={18} /></article>)}</div>
          <div className="skills-panel reveal"><div className="skills-heading"><span>MY TOOLKIT</span><Sparkles size={16} /></div><div className="skills-grid">{skills.map((group, index) => { const Icon = icons[index]; return <div className="skill-group" key={group.group}><div><Icon size={17} /><h3>{group.group}</h3></div><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>; })}</div></div>
        </div>
      </div>
    </section>
  );
}
