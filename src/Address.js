import { useEffect, useState } from "react";
import alchemy from "./alchemy";
import CA from "./CA";
import EOA from "./EOA";

function Address({ match }) {
  const { address } = match.params;
  const [isContractAddress, setIsContractAddress] = useState(false);

  useEffect(() => {
    async function getIsContractAddress() {
      // get details of the transaction
      const data = await alchemy.core.isContractAddress(address);
      setIsContractAddress(data);
    }
    getIsContractAddress();
  });

  return (
    <div>
      {isContractAddress ? <CA address={address} /> : <EOA address={address} />}
    </div>
  );
}

export default Address;
