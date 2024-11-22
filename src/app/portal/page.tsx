import Link from "next/link";

export default function PortalPage() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <h1 className="text-4xl font-bold">Portal</h1>
            <Link href="/api/logout">Logout</Link>
        </main>
    )
}