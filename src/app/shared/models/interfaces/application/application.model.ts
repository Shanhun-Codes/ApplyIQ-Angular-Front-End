import { AiInsights } from "./aiInsights.model";
import { CoverLetter } from "./coverLetter.model";
import { EmailTracking } from "./emailTracking.model";
import { Resume } from "./resume.model";

export interface Application {
  date_applied: any;
  id: number;
  title: string;
  company: string;
  location: string;
  source: string;
  url?: string;
  dateApplied: Date;
  status: string;
  notes?: string;
  tags: string[];
  jobType: string;
  jobDescription: string;
  createdAt: string;
  updatedAt: string;
  userId: number;
  
  aiInsights: AiInsights;
  
  emailTracking: EmailTracking;

  resume: Resume;

  coverLetter: CoverLetter ;
}