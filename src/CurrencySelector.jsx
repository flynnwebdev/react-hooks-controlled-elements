import { useState } from "react"

export default function CurrencySelector({ currency, setCurrency }) {
    return (
        <>
            <select value={currency} onChange={e => setCurrency(e.target.value)}>
                <option value="AUD">Australian Dollar</option>
                <option value="USD">US Dollar</option>
                <option value="EUR">Euro</option>
            </select>
        </>
    )
}
