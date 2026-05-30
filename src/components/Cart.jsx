import useCartStore from "../store/cartStore"

function Cart() {

const {
cart,
increaseQty,
decreaseQty,
removeItem

} = useCartStore()

const total = cart.reduce(

(sum, item) =>

sum +
(item.price * item.quantity),

0

)

return (

<div className="cart">

<h2>
Shopping Cart
</h2>

{cart.length === 0 && (

<p>
Cart is Empty
</p>

)}

{cart

.sort((a,b) => a.id - b.id)

.map(item => (

<div
className="cart-item"
key={item.id}
>

<div className="cart-info">

<h4>{item.name}</h4>


</div>

<div>
₹{item.price * item.quantity}
</div>

<div className="qty-box">

<button
onClick={() =>
decreaseQty(item.id)
}
>
-
</button>

<span>
{item.quantity}
</span>

<button
onClick={() =>
increaseQty(item.id)
}
>
+
</button>

</div>

<button
className="remove-btn"
onClick={() =>
removeItem(item.id)
}
>
Remove
</button>

</div>

))}

<h3 className="total">

Total: ₹{total}

</h3>

</div>

)

}

export default Cart