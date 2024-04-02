// Import our Pet Component

import Bill from "../components/Bill"
import { Form, useLoaderData } from "react-router-dom"

export default function Index(props) {
    const allBills = useLoaderData()

    return (
        <>
            <h1>New Bill</h1>
            <Form action="/create" method="POST">
            <label htmlFor="bill_name">
                <input type="text" name="bill_name" id="bill_name" />
            </label>
            <label htmlFor="due_date">
                <input type="date" name="due_date" id="due_date" />
            </label>
            <label htmlFor="amount">
            <input type="number" step="0.01" name="amount" id="amount" />
            </label>
            <label htmlFor="status">
                <h4>paid or not</h4><input type="checkbox" name="status" id="status" />
            </label>
            <button>Add Bill</button>
            </Form>

            <hr />
            {allBills.map((bill, i) => {
                const bill_id = bill.url.split("/")[4]; // Move the variable declaration here

                return (
                    <div key={i}>
                        <Bill bill={bill} />
                        {/* Delete Form */}
                        <Form action={`/delete/${bill_id}`} method="POST">
                            {/*console.log(bill.id)*/}
                            <button style={{ "backgroundColor": "red" }}>Paid</button>
                        </Form>
                    </div>
                );
            })}
        </>
    );
}