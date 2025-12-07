// Type definitions for collaboration and versioning

import { UnifiedWebsite } from '../data/builders/unifiedWebsite'

export interface Version {
  id: string
  version: string // e.g., "1.0.0", "1.1.0"
  website: UnifiedWebsite
  createdAt: number
  createdBy: string
  description?: string
  tags?: string[]
  isSnapshot?: boolean // True for auto-saved snapshots
}

export interface Change {
  id: string
  versionId: string
  type: 'create' | 'update' | 'delete' | 'move' | 'style' | 'content'
  target: {
    type: 'section' | 'component' | 'page' | 'website'
    id: string
    path?: string // e.g., "pages[0].sections[1]"
  }
  oldValue?: any
  newValue?: any
  timestamp: number
  author: string
}

export interface Comment {
  id: string
  target: {
    type: 'section' | 'component' | 'page' | 'website' | 'version'
    id: string
  }
  content: string
  author: {
    id: string
    name: string
    avatar?: string
  }
  createdAt: number
  updatedAt?: number
  resolved?: boolean
  resolvedBy?: string
  resolvedAt?: number
  replies?: Comment[]
  mentions?: string[] // User IDs mentioned
}

export interface CollaborationSession {
  id: string
  websiteId: string
  participants: CollaborationParticipant[]
  startedAt: number
  lastActivity: number
}

export interface CollaborationParticipant {
  id: string
  name: string
  avatar?: string
  role: 'owner' | 'editor' | 'viewer' | 'reviewer'
  cursor?: {
    x: number
    y: number
    elementId?: string
  }
  selection?: {
    type: 'section' | 'component'
    id: string
  }
  isActive: boolean
  lastSeen: number
}

export interface ApprovalRequest {
  id: string
  versionId: string
  requestedBy: string
  requestedAt: number
  status: 'pending' | 'approved' | 'rejected' | 'cancelled'
  reviewers: ApprovalReviewer[]
  message?: string
  deadline?: number
}

export interface ApprovalReviewer {
  id: string
  name: string
  status: 'pending' | 'approved' | 'rejected'
  reviewedAt?: number
  comment?: string
}

export interface VersionHistory {
  versions: Version[]
  currentVersionId: string
  branches?: VersionBranch[]
}

export interface VersionBranch {
  id: string
  name: string
  baseVersionId: string
  versions: Version[]
  createdAt: number
  createdBy: string
}
