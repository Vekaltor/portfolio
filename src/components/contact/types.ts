import type {ReactNode} from "react";

export interface ContactLinkItem {
  href: string
  label: string
  icon: ReactNode
  external?: boolean
  download?: boolean
}

export interface FieldProps {
  label: string
  type: string
  placeholder: string
  required?: boolean
}

