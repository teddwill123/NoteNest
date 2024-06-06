import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <main className='text-center'>
        <h2 className='text-3xl'>There was a problem Loading this page</h2>
        <p>Please go back to the <Link href='/'>Dashboaed</Link> </p>
    </main>
  )
}
