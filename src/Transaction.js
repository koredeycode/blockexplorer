import { useEffect, useState } from "react";
import alchemy from "./alchemy";
import { Utils } from "alchemy-sdk";
import { useParams } from "react-router-dom";

function Transaction() {
  const { txHash } = useParams();
  const [tx, setTx] = useState({});
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    console.log("inside useeffect");
    async function getTransaction() {
      // get details of the transaction
      const data = await alchemy.transact.getTransaction(txHash);
      console.log(data);
      setTx(data);
      setDisplay(true);
    }
    getTransaction();
  }, []);
  if (display) {
    return (
      <div className="container">
        <div className="card p-5 mb-3 no-radius">
          <div className="row mb-4">
            <div className="col-md-3 text-dt mb-2 mb-md-0">
              Transaction Hash:
            </div>
            <div className="col-md-9">
              <span id="referralLink-1" className="text-break">
                <span id="spanTxHash" className="me-1">
                  {tx.hash}
                </span>
              </span>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-3 text-dt mb-2 mb-md-0">Block Hash:</div>
            <div className="col-md-9">
              <span id="referralLink-1" className="text-break">
                <span id="spanTxHash" className="me-1">
                  {tx.blockHash}
                </span>
              </span>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-auto col-md-3 text-dt mb-1 mb-md-0">
              Status:
            </div>
            <div className="col col-md-9">
              <span
                className="badge bg-success  border border-success border-opacity-25 text-green-600 fw-medium text-start text-wrap py-1.5 px-2"
                data-bs-toggle="tooltip"
                data-bs-trigger="hover"
                data-bs-placement="top"
              >
                <i className="bi bi-check-all me-1"></i>Success
              </span>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-3 text-dt mb-2 mb-md-0">Block:</div>
            <div className="col-md-9">
              <div className="d-flex align-items-center gap-2">
                <span className="d-flex align-items-center gap-1">
                  <a href={`/block/${tx.blockNumber}`}>{tx.blockNumber}</a>
                </span>
                <span
                  className="badge bg-secondary border border-secondary border-opacity-25 text-light fw-medium text-start text-wrap py-1.5 px-2"
                  data-bs-toggle="tooltip"
                  data-bs-trigger="hover"
                  data-bs-placement="top"
                >
                  {tx.confirmations} Block Confirmations
                </span>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-3 text-dt mb-2 mb-md-0">From:</div>
            <div className="col-md-9">
              <div>
                <span className="me-1">
                  <a
                    href={`/address/${tx.from}`}
                    target="_self"
                    className="d-inline-flex align-items-center"
                  >
                    <span
                      rel="tooltip"
                      className="text-break hash-tag text-truncate"
                      data-bs-toggle="tooltip"
                      data-bs-boundary="viewport"
                      data-bs-trigger="hover"
                      data-bs-html="true"
                      data-bs-title={tx.from}
                    >
                      {tx.from}
                    </span>
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-3 text-dt mb-2 mb-md-0">To:</div>
            <div className="col-md-9">
              <div>
                <span className="me-1">
                  <a
                    href={`/address/${tx.to}`}
                    className="d-inline-flex align-items-center"
                    target="_self"
                  >
                    <span
                      rel="tooltip"
                      className="text-break hash-tag text-truncate"
                      data-bs-toggle="tooltip"
                      data-bs-boundary="viewport"
                      data-bs-trigger="hover"
                      data-bs-html="true"
                      data-bs-title={tx.to}
                    >
                      {tx.to}
                    </span>
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-3 text-dt mb-2 mb-md-0">Value:</div>
            <div className="col-md-9">
              <span id="ContentPlaceHolder1_spanValue">
                <div className="d-flex align-items-center gap-1">
                  <span
                    data-bs-toggle="tooltip"
                    data-bs-trigger="hover"
                    data-bs-placement="top"
                  >
                    {parseInt(tx.value)} ETH
                  </span>
                </div>
              </span>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 text-dt mb-2 mb-md-0">Gas Price:</div>
            <div className="col-md-9">
              <span className="text-muted">
                <b>{parseInt(tx.gasPrice)}</b> ETH
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Transaction;
