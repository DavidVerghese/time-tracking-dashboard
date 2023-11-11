"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Sidebar() {
	const pathname = usePathname();
	function linkColor(timeframe) {
		return pathname == timeframe ? `text-pale-blue font-semibold` : `text-desaturated-blue`
	}
	return (
	<div className="sidebar bg-dark-blue sm:max-w-[250px] sm:h-4/5 m-4 rounded-xl">
		<div className="bg-blue h-3/5 rounded-xl p-6">
			<Image
				src={"/images/image-jeremy.png"}
				alt={"profile"}
				width={100}
				height={100}
				className="my-3"
			/>
			<p className="text-pale-blue mt-5">Report for</p>
			<h1 className="text-4xl">Jeremy Robson</h1>
		</div>
		<div className="flex-col p-6">
			<Link id="daily" href="/daily">
			<p className={`my-3 ${linkColor("/daily")}`}>
				Daily
			</p>
			</Link>
			<Link href="/weekly">
			<p className={`my-3 ${linkColor("/weekly")}`}>Weekly</p>
			</Link>
			<Link href="/monthly">
			<p className={`my-3 ${linkColor("/monthly")}`}>Monthly</p>
			</Link>
		</div>
	</div>
  );
}
