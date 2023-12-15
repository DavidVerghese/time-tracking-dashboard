import './globals.css'
import Sidebar from './Sidebar/Sidebar'
import { Rubik } from 'next/font/google'

const rubik = Rubik ({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
	title: { default: 'Time Tracking Website', template: "%s Time Tracking"},
	description: 'record hours of work',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={rubik.className}>
			<body>
				<main className="page sm:flex sm:flex-row h-screen">
					<Sidebar />
					{children}
				</main>
			</body>
		</html>
	)
}
