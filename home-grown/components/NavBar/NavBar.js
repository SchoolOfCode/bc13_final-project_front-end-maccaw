import Link from 'next/link'
export default function NavBar() {
    return (
        <nav>
        <div className="logo">
        </div>
        <ul>
            <Link href="/"><li>Home</li></Link>
            <Link href="/listings"><li>Listings</li></Link>
            <Link href="/signup"><li>Register</li></Link>
            <Link href="/login"><li>Post</li></Link>
            <Link href="/login"><li>Log In</li></Link>
            <Link href="/dashboard"><li>Dashboard</li></Link>
        </ul>
        </nav>
    )
  }