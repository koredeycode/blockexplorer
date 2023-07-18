import { useEffect, useState } from "react";
import alchemy from "./alchemy";

function Transaction({ match }) {
  const { txHash } = match.params;
  const [transaction, setTransaction] = useState();

  useEffect(() => {
    console.log("inside useeffect");
    async function getTransaction() {
      // get details of the transaction
      console.log(txHash);
      setTransaction(await alchemy.transact.getTransaction(txHash));
    }
    getTransaction();
  }, []);

  return (
    <div>
      {Object.entries(transaction).map((e) => {
        return (
          <div>
            {e[0]}: {e[1]}
          </div>
        );
      })}
    </div>
  );
}

export default Transaction;
