import { redirect } from 'next/navigation'

export default function Home() {
	redirect('/daily');
	return (
		<div>
		</div>
	)
}
