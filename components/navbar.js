import Link from 'next/link';

export default function NavBar() {
    return (
        <nav>
            <Link href="/">
              <a>Home</a>
            </Link>

            <Link href="/posts">
              <a>Noticias</a>
            </Link>

            <style>
                {`
                nav {
                  padding-top: 10px;
                }
                a {
                  padding: 0 10px;
                }
                `}
            </style>


        </nav>
    )
}