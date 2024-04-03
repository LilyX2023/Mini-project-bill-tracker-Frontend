import { Link, useLoaderData, Form } from "react-router-dom"

export default function Show(props) {

    const aBill = useLoaderData()
    // optional chaining ?.
    const id = aBill?.url.split("/")[4]
    return (
        <div>
            {/*<h1>{aBill.bill_name}</h1>
            <h2>{aBill.due_date}</h2>
            <h2>{aBill.amount}</h2>
    <h2>{aBill.status ? "Paid" : "Not Paid"}</h2>*/}
            <div>
                {/* Update form */}
                <Form action={`/update/${id}/`} method="POST">
                <label htmlFor="bill_name">
                    rename the bill
                    <input type="text" name="bill_name" id="bill_name" defaultValue={aBill.bill_name}/>
                </label>
                <label htmlFor="due_date">
                    update the due date
                    <input type="date" name="due_date" id="due_date" defaultValue={aBill.due_date}/>
                </label>
                <label htmlFor="amount">
                    update the bill amount
                    <input type="number" step="0.01" name="amount" id="amount" defaultValue={aBill.amount}/>
                </label>
                <label htmlFor="status">
                    bill status
                    <h4>paid or not</h4><input type="checkbox" name="status" id="status" defaultChecked={aBill.status}/>
                </label>
                <button style={{"backgroundColor": "blue"}}>Update our Bill</button>
                </Form>

                {/* Delete Form */}
                <Form action={`/delete/${id}/`} method="post">
                    <button style={{"backgroundColor": "red"}}>Delete Bill</button>
                </Form>
            </div>
        </div>
    )
}