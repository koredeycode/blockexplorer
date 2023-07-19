import { useEffect, useState } from "react";
import alchemy from "./alchemy";
import { useParams } from "react-router-dom";

function Token() {
  const { token } = useParams();
  const [tokenData, setTokenData] = useState({});
  useEffect(() => {
    async function getTokenData() {
      // get details of the transaction
      const data = await alchemy.core.findContractDeployer(token);
      setTokenData(data);
    }
    getTokenData();
  }, [token]);

  return (
    <div>
      This is Token was deployed by {tokenData.deployerAddress} at block{" "}
      {tokenData.blockNumber}
    </div>
  );
}

export default Token;
