import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import alchemy from "./alchemy";
import { Utils } from "alchemy-sdk";
import TokenList from "./TokenList";

function Address() {
  const { address } = useParams();
  const [tokensList, setTokensList] = useState([]);
  const [balance, setBalance] = useState();

  useEffect(() => {
    console.log("inside use effect");
    async function getAddressData() {
      // get details of the transaction
      const dbalance = Utils.formatEther(
        await alchemy.core.getBalance(address, "latest")
      );
      setBalance(dbalance);
      const data = await alchemy.core.getTokensForOwner(address);
      console.log(data.tokens);
      setTokensList(data.tokens);
    }
    getAddressData();
  }, []);

  return (
    <div className="container">
      <div className="d-flex flex-wrap align-items-center gap-1 mb-2">
        <h5 className="card-title">Address: {address}</h5>
        <i className="bi bi-wallet"></i>
      </div>
      <div className="row">
        <div className="col-md-6 no-radius">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">ETH Balance</h5>
              <p className="card-text">{balance}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 no-radius">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Token Holdings</h5>
              <ul className="list-group">
                {tokensList.map((token) => {
                  return <TokenList token={token} />;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
