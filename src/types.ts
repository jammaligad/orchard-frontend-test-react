/* eslint-disable @typescript-eslint/no-explicit-any */
import { MouseEventHandler, RefObject } from 'react'

export interface StringObject {
  [key: string]: string
}

export interface SectionProps {
  reference: RefObject<HTMLDivElement>
  page: number
  activePage: number
  handleImageClick?: any
}

export interface PageProps {
  reference: RefObject<HTMLDivElement>
  handleImageClick?: any
}

export interface ModalProps {
  isOpen: boolean
  imageKey: string
  handleClose: MouseEventHandler<HTMLButtonElement>
}
