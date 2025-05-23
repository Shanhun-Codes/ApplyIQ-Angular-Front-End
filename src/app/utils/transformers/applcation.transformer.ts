import { Application } from '../../shared/models/interfaces/application/application.model';

export function transformJobApplications(data: any[]): Application[] {
  return data.map((o) => ({
    id: o.id,
    title: o.title,
    company: o.company,
    location: o.location,
    source: o.source,
    url: o.url,
    dateApplied: new Date(o.date_applied),
    date_applied: o.date_applied,
    status: o.status,
    notes: o.notes,
    tags: o.tags,
    jobType: o.job_type,
    jobDescription: o.job_description,
    createdAt: o.created_at,
    updatedAt: o.updated_at,
    userId: o.user_id,
    resume_id: o.resume?.id,

    aiInsights: {
      matchScore: o.ai_insights?.match_score,
      suggestedSkills: o.ai_insights?.suggested_skills,
      toneSuggestions: o.ai_insights?.tone_suggestions,
    },

    emailTracking: {
      threadId: o.email_tracking?.thread_id,
      lastEmailSnippet: o.email_tracking?.last_email_snippet,
      lastUpdatedFromEmail: o.email_tracking?.last_updated_from_email,
    },


    coverLetter: {
      id: o.cover_letter.id,
      content: o.cover_letter.content,
      generated: o.cover_letter.generated,
    },
  }));
}
