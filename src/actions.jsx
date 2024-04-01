import { redirect } from "react-router-dom";

const URL = import.meta.env.VITE_BASE_URL

// Create Action 
export const createAction = async ({request}) => {
    //get form data
    const formData = await request.formData()
    //construct request body
    const newBill = {
        bill_name: formData.get('bill_name'),
        due_date: formData.get('due_date'),
        amount: formData.get('amount'),
        status: formData.get('status') === 'on'? true : false,
    }

    //send request to backend
    await fetch(`${URL}/`,{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBill)
    })

    // redirect back to index
    return redirect('/')
}



// Update Action updating a bill from a form submission to `update/:id`
export const updateAction = async ({request, params}) => {
    // get the form data
    const formData = await request.formData()
    // get the bill id
    const id = params.id
    // construct the request body
    const updatedBill = {
        bill_name: formData.get('bill_name'),
        due_date: formData.get('due_date'),
        amount: formData.get('amount'),
        status: formData.get('status') === 'on'? true : false,
    }
    // send the request body to the backend
    await fetch(`${URL}/${id}/`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedBill)
    })
    // redirect to the Show page
    return redirect(`/bills/${id}`)
}
// Delete Action delete a bill from a form submission to `delete/:id`
export const deleteAction = async ({params}) => {
    // get the pet id
    const id = params.id
    // send the request to the backend
    await fetch(`${URL}/${id}/`, {
        method: "DELETE"
    })
    // redirect to the index page
    return redirect("/")
}