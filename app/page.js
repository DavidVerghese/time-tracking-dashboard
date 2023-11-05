import Image from 'next/image'
import Grid from './Grid/Grid'
import Sidebar from './Sidebar/Sidebar'

export default function Home() {
	return (
		<main className="sm:flex sm:flex-row h-screen">
		<Sidebar/>
		<Grid/>
		
		</main>
	)
}
