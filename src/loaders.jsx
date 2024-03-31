// Base Url
const URL = import.meta.env.VITE_BASE_URL

// Index Loader
export const indexLoader = async () => {
    const response = await fetch(`${URL}`)
    const allBills = await response.json()
    return allBills
}

// Show Loader
export const showLoader = async ({ params }) => {
    const response = await fetch(`${URL}/${params.id}`)
    const aBill = await response.json()
    return aBill
}