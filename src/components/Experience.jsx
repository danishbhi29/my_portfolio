import { ArrowUpRight, MapPin } from 'lucide-react';
import { experience, education } from '../data/portfolio';

export default function Experience() {
  return (
    <section className="experience-section" id="experience"><div className="section-shell">
      <div className="section-heading reveal"><div><div className="eyebrow"><span className="eyebrow-line" /> EXPERIENCE & EDUCATION</div><h2>Built in the<br /><span>real world.</span></h2></div><p className="section-lede">A foundation in software engineering, shaped by internships and a lot of hands-on experiments.</p></div>
      <div className="resume-grid"><div className="timeline">{experience.map((job,index) => <article className="timeline-item reveal" key={job.company} style={{ '--reveal-delay': `${index * 90}ms` }}><div className="timeline-marker"><span>{String(index + 1).padStart(2,'0')}</span><i /></div><div className="timeline-content"><div className="timeline-top"><span>{job.role}</span><span>{job.mode}</span></div><h3>{job.company}</h3><p>{job.text}</p></div></article>)}</div>
        <aside className="education-card reveal"><div className="education-icon"><MapPin size={18} /></div><span className="eyebrow">EDUCATION</span><h3>{education.degree}</h3><p>{education.school}</p><span className="education-period">{education.period}</span><div className="education-divider"/><span className="eyebrow">SELECTED COURSEWORK</span><div className="course-tags">{education.coursework.map(x=><span key={x}>{x}</span>)}</div><div className="education-divider"/><span className="eyebrow">CERTIFICATIONS</span>{education.certifications.map(x=><p className="certificate" key={x}>{x}<ArrowUpRight size={13}/></p>)}</aside></div>
      <div className="availability"><span className="availability-dot"/><span>{'OPEN TO OPPORTUNITIES'}</span><p>Junior AI Engineer · Machine Learning Engineer · AI Applications</p><span className="availability-place">Islamabad / Remote</span></div>
    </div></section>
  );
}
