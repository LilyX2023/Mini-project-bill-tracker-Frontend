import { Link, useLoaderData } from "react-router-dom"

export default function Show(props) {

    const aBill = useLoaderData()
    return (
        <div>
            <h1>{aBill.bill_name}</h1>
            <h2>{aBill.due_date}</h2>
            <h2>{aBill.amount}</h2>
            <h2>{aBill.status}</h2>
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    )
}