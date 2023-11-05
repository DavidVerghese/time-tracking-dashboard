import Image from 'next/image'

export default function Home() {
	return (
		<main className="flex h-screen">
		<div className="bg-dark-blue w-1/4 h-4/5 m-4 rounded-xl">
			<div className="bg-blue h-3/5 rounded-xl">
			</div>
		</div>
		<div className="grid grid-cols-3 gap-4 w-3/4 h-4/5 m-4">
			<div className="bg-light-red-work rounded-xl flex flex-col justify-end">
				<div className="bg-dark-blue h-4/5 rounded-xl">
				</div>	
			</div>
			<div className="bg-soft-blue-play rounded-xl flex flex-col justify-end">
				<div className="bg-dark-blue h-4/5 rounded-xl">
				</div>
			</div>
			<div className="bg-light-red-study rounded-xl flex flex-col justify-end">
				<div className="bg-dark-blue h-4/5 rounded-xl">
				</div>
			</div>
			<div className="bg-lime-green-exercise rounded-xl flex flex-col justify-end">
				<div className="bg-dark-blue h-4/5 rounded-xl">
				</div>
			</div>
			<div className="bg-violet-social rounded-xl flex flex-col justify-end">
				<div className="bg-dark-blue h-4/5 rounded-xl">
				</div>
			</div>
			<div className="bg-soft-orange-self-care rounded-xl flex flex-col justify-end">
				<div className="bg-dark-blue h-4/5 rounded-xl">
				</div>
			</div>
		</div>
		</main>
	)
}
