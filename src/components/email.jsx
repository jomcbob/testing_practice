import React, { useState } from 'react'
import emailjs from 'emailjs-com'

export default function OrderEmailSender({ cart }) {
  const [email, setEmail] = useState('')

  const shippingCost = 5
  const taxCost = 2
  const orderId = Math.floor(Math.random() * 1000000)

  const sendOrderEmail = (e) => {
    e.preventDefault()

    if (!email || !email.includes('@')) {
      alert('Please enter a valid email')
      return
    }

    const orders = cart.map(obj => ({
      name: obj.item.title,
      units: obj.quantity,
      price: (obj.item.price * obj.quantity).toFixed(2)
    }))

    const subtotal = cart.reduce((sum, obj) => sum + obj.item.price * obj.quantity, 0);
    const total = subtotal + shippingCost + taxCost;

    emailjs.send(
      'service_ybddh4c', 
      'template_k3qudfl',   
      {
        email: email,   
        order_id: orderId,
        orders: orders,
        cost: {
          shipping: shippingCost.toFixed(2),
          tax: taxCost.toFixed(2),
          total: total.toFixed(2)
        }
      },
      'PzW9Xur0rqgsP_tbi'    
    )
    .then(() => {
      alert('Order confirmation email sent!')
      setEmail('')
    })
    .catch(err => {
      console.error('Error sending email:', err)
    })
  }

  return (
    <form onSubmit={sendOrderEmail} style={{ margin: '20px' }}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail: i.e bob@bob.com"
        style={{ marginRight: '10px', padding: '5px' }}
      />
      <button type="submit" style={{ padding: '5px 10px' }}>Send Order Email</button>
    </form>
  );
}
