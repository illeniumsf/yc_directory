// 只有 Reset 这部分是 Client Side，其余部分仍旧是 Server Side
'use client'

import Link from 'next/link'
import { X } from 'lucide-react'

const SearchFormReset = () => {
  const reset = () => {
    // .search-form 是一个 CSS 类选择器，整句话负责快速定位到带有 .search-form 标识的元素
    // document.querySelector() 用来在 DOM 中查找第一个匹配该类名的元素
    // as HTMLFormElement 是 TypeScript 的类型断言, 告诉 TypeScript 编译器："我确定这个元素是一个表单元素"
    const form = document.querySelector('.search-form') as HTMLFormElement

    // 当检查到检查 form 不是 null or undefined 时，用 .reset() 函数进行重置
    if (form) form.reset()
  }

  return (
    // type = "submit" or "reset" or "button"
    <button type='reset' onClick={reset}>
      <Link href='/' className='search-btn text-white'>
        <X className='size-5' />
      </Link>
    </button>
  )
}
export default SearchFormReset
