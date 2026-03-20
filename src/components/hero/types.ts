import type { ReactNode } from 'react'

export interface SocialBtnProps {
  href: string
  title: string
  children: ReactNode
}

export interface StatCardProps {
  num: string
  label: string
  cls: string
  sub?: string
}

