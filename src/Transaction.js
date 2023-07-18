import { useEffect, useState } from "react";
import alchemy from "./alchemy";

function Transaction({ match }) {
  const {txHash} = match.params;
  const [transaction, setTransaction] = useState();

  useEffect(() => {
    async function getTransaction() {
      // get details of the transaction
      console.log(txHash);
      setTransaction(await alchemy.transact.getTransaction(txHash));
    }
    getTransaction();
  }, []);
  return <div>{JSON.stringify(transaction)}</div>;
}

export default Transaction;
