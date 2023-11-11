import Link from 'next/link'
import Image from 'next/image'

export default function Sidebar() {
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
				<Link href="/daily"><p className="text-desaturated-blue my-3">Daily</p></Link>
				<Link href="/weekly"><p className="text-desaturated-blue my-3">Weekly</p></Link>
				<Link href="/monthly"><p className="text-desaturated-blue my-3">Monthly</p></Link>
			</div>
		</div>
	)
}

