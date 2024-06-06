import { notFound } from 'next/navigation'
import React from 'react'



async function getTicket(id) {
    const res = await fetch(`http://localhost:4000/tickets/${id}` , {
        next: {
            revalidate: 0 //
        }
    })
    if(!res.ok){
        notFound()
    }

    return res.json()


}


const TicketDrtails = async ({params}) => {

const ticket = await getTicket(params.id)

  return (
    <main>
        <nav>
            <h2></h2>
            <p></p>
        </nav>
        <div key={ticket.id} className='card my-5'>
            <h2>{ticket.title}</h2>
            <small>created by: {ticket.user_email}</small>
            <p>{ticket.body}</p>
            <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
            </div>
        </div>
    </main>
  )
}

export default TicketDrtails
