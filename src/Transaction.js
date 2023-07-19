import { useEffect, useState } from "react";
import alchemy from "./alchemy";
import { useParams } from "react-router-dom";

function Transaction() {
  const { txHash } = useParams();
  const [transaction, setTransaction] = useState({});

  useEffect(() => {
    console.log("inside useeffect");
    async function getTransaction() {
      // get details of the transaction
      const data = await alchemy.transact.getTransaction(txHash);
      console.log(data);
      setTransaction(data);
    }
    getTransaction();
  }, []);

  return (
    <div>
      {Object.entries(transaction).map(([key, value]) => (
        <div key={key}>
          {key}: {JSON.stringify(value)}
        </div>
      ))}
    </div>
  );
}

export default Transaction;
