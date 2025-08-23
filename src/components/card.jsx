import { useState } from 'react'
import '../cssModals/shop.css'
import { Rating } from '@smastrom/react-rating'

export default function CardBox({ data, cart, setCart, filter, setSearch, search = '' }) {
  return (
    <div className="container">
      <div className="cardBox">
        {data &&
          data
            .filter(item => filter ? item.tags.some(tag => tag.toLowerCase() === filter.toLowerCase()) : true)
            .filter(item =>
              item.title.toLowerCase().includes(search.toLowerCase()) ||
              item.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
            )
            .map(item => (
              <Card
                cart={cart}
                setCart={setCart}
                key={item.id}
                item={item}
              />
            ))}
      </div>
    </div>
  );
}


function Card({ item, cart, setCart }) {
  const [count, setCount] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [shownPart, setShownPart] = useState(0)

  const panels = [
    <>
      <img src={item.thumbnail} alt="" loading="lazy" />
      <div>{item.title}</div>
      <div>${item.price}</div>
    </>,
    <>
      <div>{item.description}</div>
      <hr style={{ width: '100%', }} />
      <div>{item.shippingInformation}</div>
      <hr style={{ width: '100%', }} />
      <div>{item.warrantyInformation}</div>
      <hr style={{ width: '100%', }} />
    </>,
    <>
      <div>
        <Rating
          value={item.rating}
          readOnly={true}
          items={5}
        />
        <hr />
        {item.reviews.map((review, index) => {
          return (
            <div key={index}>
              {review.comment} <br /> -{review.reviewerName}
              <hr />
            </div>
          )
        })}
      </div>
    </>
  ];

  return (
    <>
      <div
        className="card"
        onMouseEnter={() => {
          setIsHovered(true)
        }}
        onMouseLeave={() => {
          setIsHovered(false)
        }}
        onClick={() => {
          console.log(item)
        }}
      >
        {isHovered &&
          <div className='moreCardOptions'>
            <button
              disabled={shownPart === 0}
              onClick={(e) => {
                e.stopPropagation()
                setShownPart(() => shownPart - 1)
              }}>
              <img src="/left-arrow.svg" height='20px' alt="" />
            </button>
            <button
              disabled={shownPart === panels.length - 1}
              onClick={(e) => {
                e.stopPropagation()
                setShownPart(() => shownPart + 1)
              }}>
              <img src="/right-arrow.svg" height='20px' alt="" />
            </button>
          </div>
        }

        <div className="card__viewport">
          <div
            className="card__track"
            style={{ transform: `translateX(-${shownPart * 100}%)` }}
          >
            {panels.map((content, index) => (
              <div key={index} className="card__panel">
                {content}
              </div>
            ))}
          </div>
        </div>

        <CardButtons count={count} setCount={setCount} cart={cart} item={item} setCart={setCart} />
      </div>
    </>
  )
}

function CardButtons({ count, setCount, cart, item, setCart }) {
  const handleDecrease = (e) => {
    e.stopPropagation();
    setCount(prev => checkIfValidNumberForQuantity(prev, false));
  };

  const handleIncrease = (e) => {
    e.stopPropagation();
    setCount(prev => checkIfValidNumberForQuantity(prev, true));
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (count > 0) {
      checkIfDouble(cart, item, setCart, count);
      setCount(0)
    } else {
      setCount(1)
    }
  };

  return (
    <div className='qtyButtonsBox'>
      {count !== 0 && (
        <div className="qtyButtons">
          <button onClick={handleDecrease}>−</button>
          <input
            className="countInput"
            min={0}
            type="number"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
          <button onClick={handleIncrease}>+</button>
        </div>
      )}

      <div className="qtyButtons">
        <button onClick={handleAddToCart}>
          {count === 0 ? 'Choose quantity' : 'Add to cart'}
        </button>
      </div>
    </div>
  );
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