import Form from 'next/form'
import SearchFormReset from '@/components/SearchFormReset'
import { Search } from 'lucide-react'

// Improved, more accessible, and user-friendly Search Form component
const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form flex flex-col sm:flex-row items-center gap-2 w-full max-w-xl mx-auto py-2">
      <label htmlFor="search-input" className="sr-only">
        Search YC Startups
      </label>
      <input
        id="search-input"
        name="query"
        defaultValue={query}
        className="search-input flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
        placeholder="Search YC startups (e.g. fintech, AI, founder name)"
        autoComplete="off"
        aria-label="Search YC Startups"
      />
      <button type="submit" className="search-btn bg-pink-500 hover:bg-pink-600 text-white rounded px-4 py-2 flex items-center gap-1 transition">
        <Search className="size-5" />
        Search
      </button>
      {query && <SearchFormReset />}
    </Form>
  )
}

export default SearchForm
