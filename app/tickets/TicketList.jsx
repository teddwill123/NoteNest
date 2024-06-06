import Link from "next/link"

async function getTickets () {
    const res = await fetch('http://localhost:4000/tickets', {
        next: {
            revalidate: 0 //
        }
    })

    return res.json()
}

async function TicketList() {
    const tickets = await getTickets()

  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className='card my-5'>
        <Link href={`/tickets/${ticket.id}`}> 
            <h2>{ticket.title}</h2>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
            </div>
        </Link>
        </div>
      ))}
      <div>
        {tickets.length === 0 && (
            <p>There are no open ticket, Okayyy</p>
        )}
      </div>
    </>
  )
}

export default TicketList
