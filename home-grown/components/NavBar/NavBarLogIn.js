import Link from 'next/link';
import Image from 'next/image';
export default function NavBarLogIn() {
    return (
        <nav>
        <div className="logo">
        <Image className ="logo"src="/illustrations/logo.png" width={50} height={50}/>
        </div>
        <ul>
            <Link href="/listings" style={{ textDecoration: 'none' }}><li>Listings</li></Link>
            <Link href="/" style={{ textDecoration: 'none' }}><li>Log Out</li></Link>
            <Link href="/dashboard" style={{ textDecoration: 'none' }}><li>Dashboard</li></Link>
            <Link href="/post" style={{ textDecoration: 'none' }}><li>Post</li></Link>
            <li> Hi, Will </li>

        </ul>
        </nav>
    )
  }