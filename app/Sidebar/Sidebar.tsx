"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Sidebar() {

	const pathname = usePathname();

	function linkColor(timeframe: string) {
		return pathname == timeframe ? `font-semibold text-regular-emphasis` : `text-medium-emphasis`
	}
	return (
		<header className="sidebar bg-dark-blue sm:max-w-[250px] sm:h-4/5 m-4 rounded-xl">
			<div className="bg-blue h-3/5 rounded-xl p-6">
				<Image
					src={"/images/image-jeremy.png"}
					alt={"profile"}
					width={100}
					height={100}
					className="my-3"
				/>
				<p className="mt-5">Report for</p>
				<h1 className="text-4xl">Jeremy Robson</h1>
			</div>
			<nav className="flex-col p-6">
				<Link id="daily" href="/t/daily">
					<p className={`my-3 text-medium-emphasis ${linkColor("/t/daily")}`}>
						Daily
					</p>
				</Link>
				<Link href="/t/weekly">
					<p className={`my-3 text-medium-emphasis ${linkColor("/t/weekly")}`}>Weekly</p>
				</Link>
				<Link href="/t/monthly">
					<p className={`my-3 text-medium-emphasis ${linkColor("/t/monthly")}`}>Monthly</p>
        		</Link>
				<Link href="/t/add-category">
					<p className={`my-3 text-medium-emphasis ${linkColor("/add-category")}`}>Add a Category</p>
        		</Link>
			</nav>
		</header>
	);
}
