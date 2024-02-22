import { faTableCells } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Tabs() {
  return (
    <section className="border-t border-stone-800">
      <div className="flex items-center justify-center gap-3">
        <span className="flex gap-2 pt-[5px] font-semibold uppercase text-xs text-center border-t border-stone-300">
          <FontAwesomeIcon icon={faTableCells} className="w-[15px] text-white" />
          gallery
        </span>
      </div>
    </section>
  )
}
