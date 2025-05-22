import { AiInsights } from "./aiInsights.model";
import { CoverLetter } from "./coverLetter.model";
import { EmailTracking } from "./emailTracking.model";
import { Resume } from "./resume.model";

export interface Application {
  id: number;
  title: string;
  company: string;
  location: string;
  source: string;
  url?: string;
  dateApplied: string;
  status: string;
  notes?: string;
  tags: string[];
  jobType: string;
  
  resume?: Resume;

  coverLetter?: CoverLetter ;

  jobDescription: string;

  aiInsights?: AiInsights;

  emailTracking?: EmailTracking;

  createdAt: string;
  updatedAt: string;
  userId: number;
}
