import { AiInsights } from "./aiInsights.model";
import { CoverLetter } from "../coverLetter/coverLetter.model";
import { EmailTracking } from "./emailTracking.model";

export interface Application {
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
  resume_id: number;
  
  aiInsights: AiInsights;
  
  emailTracking: EmailTracking;

  coverLetter: CoverLetter ;
}