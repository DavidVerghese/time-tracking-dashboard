import Image from 'next/image'
import Grid from './Grid/Grid'
import Sidebar from './Sidebar/Sidebar'
import tasksData from './data.json';

export default function Home() {
	
	return (
		<main className="page sm:flex sm:flex-row h-screen">
		<Sidebar/>
		<Grid tasksData={tasksData} />
		</main>
	)
}
