// Import our Pet Component

import Bill from "../components/Bill"
import { useLoaderData } from "react-router-dom"

export default function Index(props) {
    const allBills = useLoaderData()

    return (
        <>
            <h1>Index</h1>
            <hr />
            {allBills.map((bill, i) => <Bill bill={bill} key={i}/>)}
        </>
    )
}