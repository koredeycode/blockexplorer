import { useEffect, useState } from "react";
import alchemy from "./alchemy";

function Block({ match }) {
  const { blockInfo } = match.params;
  const [block, setBlock] = useState({});

  useEffect(() => {
    async function getBlock() {
      // get details of the block
      setBlock(await alchemy.core.getBlockWithTransactions(blockInfo));
    }
    getBlock();
  }, []);
  return (
    <div>
      <p>{JSON.stringify(block)}</p>
    </div>
  );
}

export default Block;
