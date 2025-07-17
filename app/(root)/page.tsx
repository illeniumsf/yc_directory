import SearchForm from '@/components/SearchForm'

// Fully functional server-rendered startup directory landing page
export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query

  return (
    <section className="pink_container">
      <h1 className="heading">
        🚀 Welcome to YC Directory <br />
        Connect with Top Startup Founders
      </h1>
      <p className="sub-heading max-w-3xl">
        Discover, pitch, and collaborate on the next big idea. <br />
        Search YC startups, submit your own, and network with entrepreneurs worldwide.<br />
        <b>Get started by searching below or listing your startup today!</b>
      </p>
      <SearchForm query={query} />
    </section>
  )
}
