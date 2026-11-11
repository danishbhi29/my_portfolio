import { ArrowDownToLine, ArrowUpRight } from 'lucide-react';
import InkButton from './InkButton';

const baseUrl = import.meta.env.BASE_URL;
const pdfPath = `${baseUrl}resume/Danish_Farman_AI_Engineer_Master_Resume.pdf`;
const docxPath = `${baseUrl}resume/Danish_Farman_AI_Engineer_Master_Resume.docx`;

export default function Resume() {
  return (
    <section className="resume-section" id="resume">
      <div className="section-shell">
        <div className="section-heading reveal">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> RESUME / 04</div>
            <h2>My experience,<br /><span>in one page.</span></h2>
          </div>
          <div className="resume-intro">
            <p className="section-lede">A concise overview of my AI engineering experience, projects, education, and skills.</p>
            <div className="resume-actions">
              <InkButton className="resume-download" href={pdfPath} download>
                Download PDF <ArrowDownToLine size={15} />
              </InkButton>
              <a className="resume-docx-link" href={docxPath} download>Word version <ArrowUpRight size={13} /></a>
            </div>
          </div>
        </div>
        <div className="resume-preview-wrap reveal">
          <div className="resume-preview-label"><span>DANISH FARMAN / AI ENGINEER</span><span>PDF PREVIEW</span></div>
          <iframe className="resume-preview" src={`${pdfPath}#toolbar=1&navpanes=0&view=FitH`} title="Danish Farman AI Engineer Master Resume" />
        </div>
      </div>
    </section>
  );
}
