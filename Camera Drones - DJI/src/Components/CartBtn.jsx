import React from 'react'
import { Link } from 'react-router-dom'

const CartBtn = () => {
    return (
        <div className='add-to-cart p-3 d-flex justify-content-center'>
            <Link to={"/cart"}>
                <button className='add-to-cart-btn'>Add To Cart</button>
            </Link>
        </div>
    )
}

export default CartBtn
