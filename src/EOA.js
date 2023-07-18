import { useEffect, useState } from "react";
import alchemy from "./alchemy";
import { Utils } from "alchemy-sdk";

function EOA({ address }) {
  const [tokensList, setTokensList] = useState(null);
  const [balance, setBalance] = useState();

  useEffect(() => {
    console.log("inside use effect");
    async function getEOAData() {
      // get details of the transaction
      const balance = Utils.formatEther(
        await alchemy.core.getBalance(address, "latest")
      );
      setBalance(balance);
      const data = await alchemy.core.getTokensForOwner(address);
      console.log(data.tokens);
      setTokensList(data.tokens);
    }
    getEOAData();
  }, []);

  return (
    <div>
      <div>{balance}</div>
      <div className="d-flex">
        {tokensList.map((token) => {
          Object.entries(token).map((e) => {
            return (
              <div>
                {e[0]}: {e[1]}
              </div>
            );
          });
        })}
      </div>
    </div>
  );
}

export default EOA;
