import { useEffect, useState } from "react";
import alchemy from "./alchemy";

function Token({ match }) {
  const { address } = match.params;
  const [tokenData, setTokenData] = useState({});
  useEffect(() => {
    async function getTokenData() {
      // get details of the transaction
      const data = await alchemy.core.findContractDeployer(address);
      setTokenData(data);
    }
    getTokenData();
  }, [address]);

  return (
    <div>
      This is Token was deployed by {tokenData.deployerAddress} at block{" "}
      {tokenData.blockNumber}
    </div>
  );
}

export default Token;
