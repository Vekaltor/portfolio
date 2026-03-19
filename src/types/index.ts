export type Theme = 'dark' | 'light'
export type Lang  = 'pl' | 'en'

export interface TechIcon {
  src:     string
  name:    string
  invert?: boolean
}

export interface TimelineItem {
  id:       string
  date:     string
  company:  string
  roleKey:  string
  descKey:  string
  tags:     string[]
  hollow?:  boolean
}

export interface Project {
  emoji:    string
  bg:       string
  badgeKey: string
  titleKey: string
  descKey:  string
  chips:    string[]
  live?:    string
  github?:  string
}

export interface Certificate {
  icon:        string
  titleKey:    string
  subtitleKey: string
  linkKey:     string
  issuer:      string
  year:        string
  href:        string
}

export interface TestimonialCard {
  quoteKey: string
  roleKey:  string
  avatar:   string
}
