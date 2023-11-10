import cn from 'classnames'

import { IMAGE_KEYS } from '../../constants'

import { FC } from 'react'
import { ModalProps } from 'types'

export const Modal: FC<ModalProps> = ({
  isOpen = false,
  imageKey,
  handleClose
}) => {
  return (
    <div
      tabIndex={-1}
      aria-hidden="true"
      className={cn(
        'modal fixed z-50 h-[calc(100%-1rem)] w-full overflow-y-auto overflow-x-hidden p-4',
        {
          hidden: !isOpen,
          block: isOpen
        }
      )}
    >
      <div className="modal relative max-h-full w-full max-w-2xl">
        <div className="relative rounded-lg bg-gray-700 shadow">
          <div className="flex items-start justify-between rounded-t p-4">
            <button
              onClick={handleClose}
              type="button"
              className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:text-white"
            >
              <svg
                className="h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="w-full">
            <img src={IMAGE_KEYS[imageKey]} className="m-auto w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
