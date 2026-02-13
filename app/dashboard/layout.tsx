import AdminNavbar from '../components/AdminNavbar'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex min-h-screen'>
      <AdminNavbar />
      <main className='ml-[18%] w-full'>
        {children}
      </main>
    </div>
  )
}






