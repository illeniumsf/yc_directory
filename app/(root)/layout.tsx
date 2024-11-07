import Navbar from '@/app/components/Navbar'

// 如果你希望 children 可以接受任何类型的内容，使用 React.ReactNode 是一个很好的选择，因为它涵盖了所有可能的渲染内容
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='font-work-sans'>
      <Navbar />

      {children}
    </main>
  )
}
