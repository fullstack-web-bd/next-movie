export default function Header() {
    return (
        <nav className="sticky top-0 bg-[#0C0C0C] opacity-90 z-10">
            <div className="flex justify-between py-6 px-10 items-center">
                {/* Header left side */}
                <div>
                    <ul className="flex list-none">
                        <li className="relative mr-5 mt-3">
                            <i className="bi bi-chevron-left mr-2 sm:mr-4"></i>
                            <i className="bi bi-chevron-right"></i>
                        </li>
                        <li className="relative">
                            <i className="bi bi-search absolute left-4 top-2.5 hidden sm:block"></i>
                            <input type="search" placeholder="Search everything" className="border-5 w-20 sm:w-full rounded-full border border-solid border-slate-800 bg-transparent p-3 pl-3 sm:pl-12 focus:border-slate-800 active:border-slate-800 text-xs text-slate-500 placeholder:text-slate-500" />
                        </li>
                    </ul>
                </div>

                {/* Header right side */}
                <div>
                    <ul className="list-none">
                        <li>
                            <a href="" className="relative mr-4">
                                <i className="bi bi-dot absolute -right-0.5 -top-3 text-red-500"></i>
                                <i className="bi bi-chat-square-dots"></i>
                            </a>
                            <a href="" className="relative mr-4">
                                <i className="bi bi-dot absolute -right-0.5 -top-3 text-red-500"></i>
                                <i className="bi bi-bell"></i>
                            </a>
                            <a href="">
                                <i className="bi bi-person-circle"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}