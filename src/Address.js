import { useEffect, useState } from "react";
import alchemy from "./alchemy";

function Address({ match }) {
  const { address } = match.params;
  const [isContractAddress, setIsContractAddress] = useState(false);
  useEffect(() => {
    async function getIsContractAddress() {
      // get details of the transaction
      const data = await alchemy.core.isContractAddress(address);
      console.log(data);
      setIsContractAddress(data);
    }
    getIsContractAddress();
  });

  const renderContract = () => {
    return <div>Contract</div>;
  };
  const renderEOA = () => {
    return <div>EOA</div>;
  };

  return <div>{isContractAddress ? renderContract() : renderEOA()}</div>;
}

export default Address;
