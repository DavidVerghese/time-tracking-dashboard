'use client'
import {useState} from 'react'

export default function GlobalError({ error, reset }) {
  return (
      <div>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </div>
  )
}