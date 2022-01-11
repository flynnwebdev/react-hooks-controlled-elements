import { useState, useEffect } from "react";
import currencies from "./currencies.json"

export default function CurrencySelector({ currency, setCurrency }) {
  return (
    <>
      {currencies ? (
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            {currencies.map(cur => <option value={cur.currency}>{cur.currency} ({cur.country})</option>)}
        </select>
      ) : (
        <p>Loading ...</p>
      )}
    </>
  );
}
