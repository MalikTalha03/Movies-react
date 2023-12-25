import React from 'react'

const NewOrder = () => {
  return (
    <div>
        <h1>New Order</h1>
        <form>
            <div className="customerdet">
                <label htmlFor="customer">Customer Name</label>
                <input type="text" id="customer" name="customer" />
                <label htmlFor='contact'>Contact Number</label>
                <input type='text' id='contact' name='contact' />
            </div>
            <label htmlFor="product">Product Name</label>
            <input type="text" id="product" name="product" />
            <label htmlFor="quantity">Quantity</label>
            <input type="text" id="quantity" name="quantity" />
        </form>
        <table>
            <tr>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total Amount</th>
            </tr>
        </table>
    </div>
  )
}

export default NewOrder