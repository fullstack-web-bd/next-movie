import Link from "next/link";

export default function () {
    return (
        <aside className="basis-[20%] sticky top-0 h-screen overflow-y-auto border-r border-solid border-slate-900 px-10 pt-10">
            {/* Logo */}
            <div className="mb-10">
                <Link href={'/'}>
                    <img src="/logos/logo.png" className="w-40 min-w-[60px] hidden sm:block" alt="" />
                    <span className="block sm:hidden min-w-[60px]">A <span className="text-red-500">D</span></span>
                </Link>
            </div>

            {/* News Feed links */}
            <h3 className="text-xs mb-4">News Feed</h3>
            <ul>
                <li>
                    <Link href={'/browse'} className="hover:text-red-500 block pb-4 text-sm">
                        <i className="bi bi-grid mr-4"></i>
                        <span className="hover:text-white invisible sm:visible">
                            Browse
                        </span>
                    </Link>
                </li>
                <li>
                    <Link href={'/watchlist'} className="hover:text-red-500 block pb-4 text-sm">
                        <i className="bi bi-heart mr-4"></i>
                        <span className="hover:text-white invisible sm:visible">
                            Watchlist
                        </span>
                    </Link>
                </li>
                <li>

                    <Link href={'/coming-soon'} className="hover:text-red-500 block pb-4 text-sm">
                        <i className="bi bi-calendar3 mr-4"></i>
                        <span className="hover:text-white invisible sm:visible">
                            Coming Soon
                        </span>
                    </Link>
                </li>
            </ul>
        </aside>
    )
}