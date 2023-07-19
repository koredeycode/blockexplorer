import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import alchemy from "./alchemy";

function Block() {
  const { blockInfo } = useParams();
  const [block, setBlock] = useState({});

  useEffect(() => {
    async function getBlock() {
      // get details of the block
      setBlock(
        await alchemy.core.getBlockWithTransactions(
          /^\d+$/.test(blockInfo) ? Number(blockInfo) : blockInfo
        )
      );
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
