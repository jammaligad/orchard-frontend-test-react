import { RefObject } from 'react'

export interface SectionProps {
  reference: RefObject<HTMLDivElement>
  page: number
  activePage: number
}

export interface PageProps {
  reference: RefObject<HTMLDivElement>
}
