import { useQuery, gql,useMutation } from "@apollo/client";
import { useState } from "react";
const AviaKassa = gql`
query{
  aviaCash{
    id
    address
  }
}
`
const Ticket = gql`
query Ticket($avia_id:ID!){
  Ticket(avia_id:$avia_id){
    id
    name
    time
    price
  }
}
`
const NEW_TICKET = gql`
mutation newTicket($name:String! $time:String! $price:String! $avia_id:ID!){
  newTicket(name:$name time:$time price:$price avia_id:$avia_id)
  {
    name
    time
    price
    avia_id
  }
}
`
const App = () => {
  const [ticket,setTicket] = useState('')
  const {data} = useQuery(AviaKassa)
  const {data:TicketData} = useQuery(Ticket,{
    variables:{avia_id:ticket}
  })
  // console.log(TicketData);
  // console.log(TicketData);
  const [newTicket] = useMutation(NEW_TICKET,{
    update:(cashe,data) => {
      console.log(data)
    }
  })
  const handlySubmit = e => {
    e.preventDefault()
    const {select,name,time,price} = e.target.elements
    console.log(select.value,name.value,time.value,price.value);
    newTicket({
      variables:{
        name:name.value,
        time:time.value,
        price:price.value,
        avia_id:select.value
      }
    })
  }
  return(
    <div>
     <h2>Buy ticket</h2>
     <form onSubmit={handlySubmit}>
       <select name="select">
         <option id="choose">choose</option>
         {
           data && data.aviaCash.map((e,i) => (
             <option value={e.id} key={i}>{e.address}</option>
           ))
         }
       </select>
       <input name="name" type="text" placeholder="name"/>
       <input name="time" type="text" placeholder="time"/>
       <input name="price" type="text" placeholder="price"/>
       <button type="submit">send</button>
     </form>
     {
       data && data.aviaCash.map((e,i) => (
         <h3 onClick={() => setTicket(e.id)} key={i}>{e.address}</h3>
       ))
     }
     <hr/>
     {
       TicketData && TicketData.Ticket.map((e,i) => (
         <ol key={i}>
         <li>{e.name}</li>
         <li>{e.time}</li>
         <li>{e.price}-so`m</li>
         </ol>
       ))
     }
    </div>
  )
}
export default App;