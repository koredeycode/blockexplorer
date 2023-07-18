import { useEffect, useState } from "react";
import alchemy from "./alchemy";

function Home() {
  const [currentBlockNumber, setCurrentBlockNumber] = useState();

  useEffect(() => {
    async function getCurrentBlockNumber() {
      // get details of the transaction
      setCurrentBlockNumber(await alchemy.core.getBlockNumber());
    }
    getCurrentBlockNumber();
  }, []);
  return <div>{currentBlockNumber}</div>;
}

export default Home;
