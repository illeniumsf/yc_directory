import Form from 'next/form'
import SearchFormReset from '@/components/SearchFormReset'
import { Search } from 'lucide-react' // lucide-react is a dependency of Shadcn/ui

const SearchForm = ({ query }: { query?: string }) => {
  return (
    // 在 Next.js 的新表单组件中，scroll 属性可以设置为 true 或 false，以决定在提交表单后是否自动滚动到页面的顶部
    <Form action='/' scroll={false} className='search-form'>
      <input
        name='query'
        defaultValue={query}
        className='search-input'
        placeholder='Search Startups'
      />

      {/* 只有在用户输入了某些内容后，重置按钮才会显示出来 */}
      <div className='flex gap-2'>
        {query && <SearchFormReset />}

        <button type='submit' className='search-btn text-white'>
          <Search className='size-5' />
        </button>
      </div>
    </Form>
  )
}

export default SearchForm
