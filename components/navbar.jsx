import React from 'react'
import {Link} from 'react-router-dom'
import { ShoppingBag } from 'phosphor-react'
import './navbar.css'
export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='links'>
            <Link to='/'>shop</Link>
            <Link to="/cart"><ShoppingBag size={35}/></Link>
        </div>
    </div>
  )
}
