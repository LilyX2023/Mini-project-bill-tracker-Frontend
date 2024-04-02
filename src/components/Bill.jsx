import { Link } from "react-router-dom"

export default function Bill({ bill }) {

    const id = bill.url.split('/')[4]
    
    return (
        <div>
            <Link to={`/bills/${id}`}>
                <h1>{bill.bill_name}</h1>
            </Link>
        </div>
    )
}