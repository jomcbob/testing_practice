import { useState, useEffect } from 'react'
import '../cssModals/Shop.css'

export default function CardBox({ data, cart, setCart, filter, setSearch, search = '' }) {

  return (
    <div className='container'>
      <div className="cardBox">
        {data && data
          .filter(item => filter ? item.tags.includes(filter) : true)
          .filter(item => item.title.toLowerCase().includes(search))
          .map((item, index) => (
            <Card
              cart={cart}
              setCart={setCart}
              key={`${item.id}-${index}`}
              item={item}
            />
          ))
        }

      </div>
    </div>
  )
}

function Card({ item, cart, setCart }) {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card" onClick={() => {
        console.log(item)
      }}
      >
        <img
          src={item.thumbnail}
          alt=''
          loading="lazy"
        />
        <div>{item.title}</div>
        <div>${item.price}</div>
        <div>
          <button onClick={(e) => {
            e.stopPropagation()
            setCount(() => checkIfValidNumberForQuantity(count, false))
          }}>−</button>
          {count}
          <button onClick={(e) => {
            e.stopPropagation()
            setCount(() => checkIfValidNumberForQuantity(count, true))
          }}>+</button>
          <button onClick={(e) => {
            count > 0 &&
              checkIfDouble(cart, item, setCart, count)
            setCount(0)
            e.stopPropagation()
          }}>add to 🛒</button>
        </div>
      </div>
    </>
  )
}

function checkIfDouble(cart, item, setCart, count) {
  let existing = cart.find(obj => obj.item.id === item.id)

  if (existing) {
    existing.quantity += count
  } else {
    setCart([...cart, { item: item, quantity: count }])
  }
}

function checkIfValidNumberForQuantity(number, upOne) {
  let newNumber = number
  if (upOne) {
    if (number === 100) return number
    newNumber = number + 1
    return newNumber
  } else {
    if (number === 0) return number
    newNumber = number - 1
    return newNumber
  }
}