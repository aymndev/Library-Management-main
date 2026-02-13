import UserNavbar from '../components/UserNavbar'

export default function userLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className='flex flex-col'>
            <div>
                <UserNavbar/>
            </div>

            <main className=''>
                
                {children}
            </main>
        </div>
    )
}