import { useEffect, useState } from "react";
import alchemy from "./alchemy";

function CA({ address }) {
  const [CAData, setCAData] = useState(null);
  useEffect(() => {
    async function getCAData() {
      // get details of the transaction
      const data = await alchemy.core.findContractDeployer(address);
      setCAData(data);
    }
    getCAData();
  });

  return (
    <div>
      This is CA was deployed by {CAData.deployerAddress} at block{" "}
      {CAData.blockNumber}
    </div>
  );
}

export default CA;
