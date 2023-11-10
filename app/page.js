"use client";
import Grid from './Grid/Grid'
import Sidebar from './Sidebar/Sidebar'
import { useState } from 'react';
import Link from 'next/link'

export default function Home() {

	return (
		<div>
			Welcome ... content coming soon
			<Link href="/daily"><p>Daily</p></Link>
			<Link href="/weekly"><p>Weekly</p></Link>
			<Link href="/monthly"><p>Monthly</p></Link>
		</div>
	)
}
