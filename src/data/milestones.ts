/**
 * Milestones Data Architecture
 * 
 * Strict Integrity Policy:
 * In accordance with Innocapsule engineering rules, no fabricated founding dates,
 * funding announcements, team sizes, user counts, or simulated milestones are included.
 * 
 * When verified, factual milestones are ready to be published, populate the `milestones` array
 * below. The UI components will render the timeline when data is present.
 */

export interface Milestone {
  id: string
  date: string
  title: string
  description: string
  category: 'PRODUCT' | 'SYSTEM' | 'ENGINEERING' | 'COMPANY'
  verified: boolean
}

// Omitted until verified factual data is supplied.
export const milestones: Milestone[] = []
