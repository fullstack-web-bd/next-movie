import Link from "next/link";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const WatchListCount = dynamic(() => import("../watchlist/count"), {
  ssr: false,
});

export default function () {
  const router = useRouter();

  return (
    <aside className="basis-[20%] sticky top-0 h-screen overflow-y-auto border-r border-solid border-slate-900 px-10 pt-10">
      {/* Logo */}
      <div className="mb-10">
        <Link href={"/"}>
          <span className="text-2xl hidden sm:block">
            <span>Next</span> <span className="text-red-500">Movies</span>
          </span>
          <span className="block sm:hidden min-w-[60px]">
            N <span className="text-red-500">M</span>
          </span>
        </Link>
      </div>

      {/* News Feed links */}
      <h3 className="text-xs mb-4">News Feed</h3>
      <ul>
        <li>
          <Link
            href={"/"}
            className={`hover:text-red-500 block pb-4 text-sm ${
              router.pathname === "/" ? "text-red-500" : ""
            }
                `}
          >
            <i className="bi bi-grid mr-4"></i>
            <span className="hover:text-white invisible sm:visible">
              Browse
            </span>
          </Link>
        </li>
        <li>
          <Link
            href={"/watchlist"}
            className={`hover:text-red-500 block pb-4 text-sm ${
              router.pathname === "/watchlist" ? "text-red-500" : ""
            }
                  `}
          >
            <i className="bi bi-heart mr-4"></i>
            <span className="hover:text-white invisible sm:visible">
              Watchlist
              <WatchListCount />
            </span>
          </Link>
        </li>
        <li>
          <Link
            href={"/coming-soon"}
            className={`hover:text-red-500 block pb-4 text-sm ${
              router.pathname === "/coming-soon" ? "text-red-500" : ""
            }
                `}
          >
            <i className="bi bi-calendar3 mr-4"></i>
            <span className="hover:text-white invisible sm:visible">
              Coming Soon
            </span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
