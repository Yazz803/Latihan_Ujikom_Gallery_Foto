import React from 'react'

export default function Footer() {
  return (
    <footer>
      <p className="text-secondary text-center text-sm py-4 mt-5 border-t border-stone-800">
        © {new Date().getFullYear()} YazzTech Indonesia
      </p>
    </footer>
  )
}
