"use client";
import Grid from './Grid/Grid'
import Sidebar from './Sidebar/Sidebar'
import { useState } from 'react';
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/daily');
	return (
		<div>
		</div>
	)
}
