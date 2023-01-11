import Link from 'next/link';
import Image from 'next/image';
export default function NavBar() {
    return (
        <nav>
        <div className="logo">
        <Image className ="logo"src="/illustrations/logo.png" width={50} height={50}/>
        </div>
        <ul>
            <Link href="/" style={{ textDecoration: 'none' }}><li>Home</li></Link>
            <Link href="/listings" style={{ textDecoration: 'none' }}><li>Listings</li></Link>
            <Link href="/signup" style={{ textDecoration: 'none' }}><li>Register</li></Link>
            <Link href="/login" style={{ textDecoration: 'none' }}><li>Log In</li></Link>
            <Link href="/login" style={{ textDecoration: 'none' }}><li>Post</li></Link>
            <Link href="/dashboard" style={{ textDecoration: 'none' }}><li>Dashboard</li></Link>
        </ul>
        </nav>
    )
  }