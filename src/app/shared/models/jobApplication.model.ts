export interface JobApplication {
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

  resumeId?: string;
  coverLetter?: {
    id: string;
    content: string;
    generated: boolean;
  };

  jobDescription: string;
  aiInsights?: {
    matchScore: number;
    suggestedSkills: string[];
    toneSuggestions?: string;
  };

  emailTracking?: {
    threadId: string;
    lastEmailSnippet: string;
    lastUpdatedFromEmail: string;
  };

  createdAt: string;
  updatedAt: string;
  userId: number;
}
