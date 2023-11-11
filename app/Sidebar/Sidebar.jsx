import Link from 'next/link'

export default function Sidebar() {
	return (
		<div className="bg-dark-blue sm:w-1/4 h-48 sm:h-4/5 m-4 rounded-xl">
      <div className="bg-blue h-3/5 rounded-xl">
        <img src="/images/image-jeremy.png"/>
			</div>
			<div className="flex-col">
				<Link href="/daily"><p>Daily</p></Link>
				<Link href="/weekly"><p>Weekly</p></Link>
				<Link href="/monthly"><p>Monthly</p></Link>
			</div>
		</div>
	)
}

