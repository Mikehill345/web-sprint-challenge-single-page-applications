import React from 'react'

export default function Order({ details }) {
    console.log(details)
    console.log(details.name, 'the name')
    console.log(details.special, 'the special')
  return (
    <div className='order container'>
        <h2>Thank you for placing your order! {details.name}</h2>
      <h3>Pizza Size:  {details.size}</h3>
      <p>Amount of sauce: {details.sauce}</p>
      <p>Special Instructions: {details.special}</p>

      {
        !!details.toppings && !!details.toppings.length &&
        <div>
          Toppings:
          <ul>
            {details.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
    </div>
  )
}

