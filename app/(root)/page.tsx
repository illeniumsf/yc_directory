import SearchForm from '@/components/SearchForm'

// Make this into a fully functional URL modifying server rendered form

// searchParams 从 URL 查询参数中获取数据，类型定义成 Promise，解析为可能包含 query string 的 object
export default async function Home({searchParams,}: {searchParams: Promise<{ query?: string }>}) {
  // 等待 Promise 解析并获取 query 值
  const query = (await searchParams).query

  return (
    <>
      <section className='pink_container'>
        <h1 className='heading'>
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>
        {/* Use exclamation mark ! when we want to override some other styles previously provided to this element */}
        <p className='sub-heading !max-w-3xl'>
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query} />
      </section>
    </>
  )
}
