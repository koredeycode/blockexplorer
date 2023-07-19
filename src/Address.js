import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import alchemy from "./alchemy";
import { Utils } from "alchemy-sdk";

function Address() {
  const { address } = useParams();
  const [tokensList, setTokensList] = useState([]);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    console.log("inside use effect");
    async function getAddressData() {
      // get details of the transaction
      const balance = Utils.formatEther(
        await alchemy.core.getBalance(address, "latest")
      );
      setBalance(balance);
      const data = await alchemy.core.getTokensForOwner(address);
      console.log(data.tokens);
      setTokensList(data.tokens);
    }
    getAddressData();
  }, []);

  return (
    <div>
      <div>{balance}</div>
      <div className="d-flex flex-wrap">
        {tokensList.map((token) => {
          return Object.entries(token).map((e) => {
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

export default Address;
