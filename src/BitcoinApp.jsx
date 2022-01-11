import { useState } from "react"
import BitcoinCurrentPrice from "./BitcoinCurrentPrice";
import CurrencySelector from "./CurrencySelector";

export default function BitcoinApp() {
  const [currency, setCurrency] = useState("AUD");

  return (
    <>
      <h1>Bitcoin Index</h1>
      <CurrencySelector currency={currency} setCurrency={setCurrency} />
      <BitcoinCurrentPrice currency={currency} />
    </>
  );
}
