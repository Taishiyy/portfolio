import Link from "next/link"

export default function FirstPost() {
    return (
        <h1>
            Read <Link href="/posts/first-post">this page!</Link>
        </h1>
    )
}