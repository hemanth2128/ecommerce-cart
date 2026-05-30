import { useState } from "react"
import { z } from "zod"

const schema = z.object({

name:
z.string()
.min(3,"Minimum 3 chars"),

email:
z.string()
.email("Invalid Email"),

address:
z.string()
.min(5,"Address too short")

})

function CheckoutForm(){

const [form,setForm]=
useState({

name:"",
email:"",
address:""

})

const [errors,setErrors]=
useState({})

function handleSubmit(e){

e.preventDefault()

const result =
schema.safeParse(form)

if(!result.success){

const fieldErrors={}

result.error.errors.forEach(
err=>{

fieldErrors[
err.path[0]
]=err.message

}
)

setErrors(fieldErrors)

return
}

setErrors({})

alert(
"Checkout Successful"
)

}

return(

<form
className="checkout"
onSubmit={handleSubmit}
>

<h2>
Checkout
</h2>

<input
placeholder="Name"
value={form.name}
onChange={(e)=>

setForm({

...form,
name:e.target.value

})

}
/>

<p>{errors.name}</p>

<input
placeholder="Email"
value={form.email}
onChange={(e)=>

setForm({

...form,
email:e.target.value

})

}
/>

<p>{errors.email}</p>

<textarea
placeholder="Address"
value={form.address}
onChange={(e)=>

setForm({

...form,
address:e.target.value

})

}
/>

<p>{errors.address}</p>

<button>
Submit Order
</button>

</form>

)

}

export default CheckoutForm