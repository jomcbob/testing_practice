import { useState, useEffect, useContext } from 'react'
import { DataContext } from "../App";
import '../cssModals/shop.css'
import CardBox from "../components/card";
import Cart from "../components/cart";
import SideBar from "../components/sideBar";
import Header from '../components/Header';

const Shop = () => {
  const { data } = useContext(DataContext);
  const [filter, setFilter] = useState(false)
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState([])
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    console.log(cart)
  }, [cart])

  useEffect(() => {
    console.log(filter)
  }, [filter])

  useEffect(() => {
    console.log(search)
  }, [search])


  return (
    <>
      <Header link={'/'} page={'🏠 Home'} />
      <div className="flexRow">
        <SideBar data={data} setFilter={setFilter} setSearch={setSearch} search={search} />
        <CardBox cart={cart} setCart={setCart} data={data} filter={filter} setSearch={setSearch} search={search} />
      </div>
      <Cart showModal={showModal} setShowModal={setShowModal} data={cart} setCart={setCart} />
      <hr />
    </>
  )
}

export default Shop
