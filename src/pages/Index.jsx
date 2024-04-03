// Import our Pet Component

import Bill from "../components/Bill"
import { Form, useLoaderData } from "react-router-dom"

export default function Index(props) {
    const allBills = useLoaderData()

    return (
        <>
            <div className="new-bill-container"></div>
            <div className="new-bill-label"><h4>New Bill</h4></div>
            <Form className="new-bill-form" action="/create" method="POST">
            <label htmlFor="bill_name">
                <input type="text" name="bill_name" id="bill_name" placeholder="Bill Name" />
            </label>
            <label htmlFor="due_date">
                <input type="date" name="due_date" id="due_date"/>
            </label>
            <label htmlFor="amount">
            <input type="number" step="0.01" name="amount" id="amount" placeholder="Amount"/>
            </label>
            <label htmlFor="status" className="checkbox-label">
                <h4>Paid</h4><input type="checkbox" name="status" id="status"/>
            </label>
            <button className="add-bill">Add</button>
            </Form>

            <hr />
            {allBills.map((bill, i) => {
                const bill_id = bill.url.split("/")[4]; // Move the variable declaration here

                return (
                    <div key={i} className="bills-index">
                        <Bill bill={bill} />
                        <div className="bills-index-right">
                        <h4>${bill.amount} {/* Display the amount of the bill */}</h4>
                        {/* Delete Form */}
                        <div className="paid-button">
                        <Form action={`/delete/${bill_id}`} method="POST">
                            {/*console.log(bill.id)*/}
                        <button>Paid</button>
                        </Form>
                        </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}