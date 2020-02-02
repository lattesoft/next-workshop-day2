import Link from 'next/link'

export default () => {
    return (
        <>
            This is a header: 
            <Link href="/">
                <a>Homepage</a>
            </Link>
            <Link href="/about">
                <a>About Page</a>
            </Link>
        </>
    )
}