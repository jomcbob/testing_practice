import '../cssModals/cart.css'
import { useEffect } from 'react'

export default function Modal({ showModal, setShowModal, data, setCart }) {

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [showModal])

  return (
    <div>
      <div className={`cart ${data.length > 0 ? 'hasItems' : '' }`} onClick={() => setShowModal(true)}>
      <div className='numberOfItemsBox'><div className='numberOfItems'>{data.length}</div></div>
        <img src='./cart.svg'></img>
      </div>

      <div
        className={`modalBox ${showModal ? 'show' : 'hide'}`}
        onClick={() => setShowModal(false)}
      >
        <div
          className="modal"
          onClick={(e) => e.stopPropagation()}
        >
          <div className='cartBox'>
            {data && data.map((item, index) => (
              <div key={index} className="card">
                <button className='delete' onClick={() => setCart(data.filter((_, i) => i !== index))}>
                  <img src='./trash.svg'></img>
                </button>
                <img src={item.item.thumbnail}></img>
                <div>{item.item.title}</div>
                <div>Total price: ${Math.round(item.item.price * item.quantity * 100) / 100}</div>
                <div>quantity: {item.quantity}</div>
              </div>
            ))}
            {(!data || data.length === 0) && (
              <div>Nothing in cart!</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
