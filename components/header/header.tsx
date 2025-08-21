import Link from "next/link"
import { Dancing_Script } from "next/font/google"

const dancingScript = Dancing_Script({
  subsets: ["latin"]
})

export default function Header() {
    return (
        <header>
            <div className="flex-1"></div>
                <Link href="/" className={`${dancingScript.className}`}>
                    <h1 className="text-3xl font-bold">Stockoroma</h1>
                </Link>
                <div className="flex-1 flex justify-end xl:pr-6">
                    <Link href="/products">Products</Link>
                </div>
        </header>
    )
}