import { useState, useEffect } from "react";

function BitcoinCurrentPrice({ currency }) {
  const [bitcoinData, setBitcoinData] = useState();

  useEffect(() => {
    console.log("Fetching data ...")
    fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`)
      .then((res) => res.json())
      .then((data) => setBitcoinData(data.bpi));
  }, [currency])

  useEffect(() => {
      console.log("bitcoinData was updated")
  }, [bitcoinData])

  return (
    <>
      {bitcoinData?.[currency] ? <p>Current Price: {currency} {bitcoinData[currency].rate}</p> : <p>Loading ...</p> }
    </>
  );
}

export default BitcoinCurrentPrice
