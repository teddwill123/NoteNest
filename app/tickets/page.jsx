import React from 'react'
import TicketList from './TicketList'
import Link from 'next/link'

const Tickets = () => {
  return (
    <main>
        <nav className='flex justify-between'>
            <div >
                <h2>Tickets</h2>
                <p>Currently open tickets</p>
            </div>
            <Link href='tickets/create'>
                <button>Create a new ticket</button>
            </Link>
        </nav>
        <TicketList/>
    </main>
  )
}

export default Tickets
