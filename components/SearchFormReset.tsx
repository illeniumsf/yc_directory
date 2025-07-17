'use client'

import Link from 'next/link'
import { X } from 'lucide-react'

// Improved, accessible, and semantic Search Form Reset button
const SearchFormReset = () => {
  const reset = (e: React.MouseEvent) => {
    e.preventDefault()
    const form = document.querySelector('.search-form') as HTMLFormElement | null
    if (form) form.reset()
  }

  return (
    <button
      type="button"
      onClick={reset}
      aria-label="Clear search and reset form"
      className="search-btn text-white bg-gray-400 hover:bg-gray-500 rounded px-2 py-1 ml-2 flex items
