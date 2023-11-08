<>
  <div class="card p-5 mb-3" bis_skin_checked="1">
    <div class="row mb-4" bis_skin_checked="1">
      <div class="col-md-3 text-dt mb-2 mb-md-0" bis_skin_checked="1">
        <i
          class="far fa-question-circle me-1"
          data-bs-container="body"
          data-bs-toggle="popover"
          data-bs-trigger="hover"
          data-bs-placement="top"
          data-bs-original-title=""
          title=""
          data-bs-content="A TxHash or transaction hash is a unique 66-character identifier that is generated whenever a transaction is executed."
        ></i>
        Transaction Hash:
      </div>
      <div class="col-md-9" bis_skin_checked="1">
        <span id="referralLink-1" class="text-break">
          <span id="spanTxHash" class="me-1">
            {tx.hash}
          </span>
        </span>
        <a
          class="js-clipboard link-secondary"
          href="javascript:;"
          data-bs-toggle="tooltip"
          data-hs-clipboard-options='{
                                    "type": "tooltip",
                                    "successText": "Copied!",
                                    "contentTarget": "#spanTxHash",
                                    "classChangeTarget": "#linkIcon-1",
                                    "defaultClass": "fa-copy",
                                    "successClass": "fa-check"
                                }'
          aria-label="Copy TxHash to clipboard"
          data-bs-trigger="hover"
          data-bs-original-title="Copied!"
        >
          <i id="linkIcon-1" class="bi bi-copy"></i>
        </a>
      </div>
    </div>

    <div class="row mb-4" bis_skin_checked="1">
      <div class="col-auto col-md-3 text-dt mb-1 mb-md-0" bis_skin_checked="1">
        <i
          class="far fa-question-circle me-1"
          data-bs-container="body"
          data-bs-toggle="popover"
          data-bs-trigger="hover"
          data-bs-placement="top"
          data-bs-original-title=""
          title=""
          data-bs-content="The status of the transaction."
        ></i>
        Status:
      </div>
      <div class="col col-md-9" bis_skin_checked="1">
        <span
          class="badge bg-success bg-opacity-10 border border-success border-opacity-25 text-green-600 fw-medium text-start text-wrap py-1.5 px-2"
          data-bs-toggle="tooltip"
          data-bs-trigger="hover"
          data-bs-placement="top"
        >
          <i class="fa fa-check-circle me-1"></i>Success
        </span>
      </div>
    </div>

    <div class="row mb-4" bis_skin_checked="1">
      <div class="col-md-3 text-dt mb-2 mb-md-0" bis_skin_checked="1">
        <i
          class="far fa-question-circle me-1"
          data-bs-container="body"
          data-bs-toggle="popover"
          data-bs-trigger="hover"
          data-bs-placement="top"
          data-bs-original-title=""
          title=""
          data-bs-content="Number of the block in which the transaction is recorded. Block confirmations indicate how many blocks have been added since the transaction was produced."
        ></i>
        Block:
      </div>
      <div class="col-md-9" bis_skin_checked="1">
        <div class="d-flex align-items-center gap-2" bis_skin_checked="1">
          <span class="d-flex align-items-center gap-1">
            <i
              class="fa fa-check-circle text-success small"
              data-bs-toggle="tooltip"
              aria-label="This block is finalized and cannot be reverted without slashing at least 1/3 of all validators' stake."
            ></i>
            <a href={`/block/${tx.blockNumber}`}>{tx.blockNumber}</a>
          </span>
          <span
            class="badge bg-secondary bg-opacity-10 border border-secondary border-opacity-25 text-dark fw-medium text-start text-wrap py-1.5 px-2"
            data-bs-toggle="tooltip"
            data-bs-trigger="hover"
            data-bs-placement="top"
          >
            {tx.confirmations} Block Confirmations
          </span>
        </div>
      </div>
    </div>

    <div id="ContentPlaceHolder1_divTimeStamp" bis_skin_checked="1">
      <div class="row mb-4" bis_skin_checked="1">
        <div class="col-md-3 text-dt mb-2 mb-md-0" bis_skin_checked="1">
          <i
            class="far fa-question-circle me-1"
            data-bs-container="body"
            data-bs-toggle="popover"
            data-bs-trigger="hover"
            data-bs-placement="top"
            data-bs-original-title=""
            title=""
            data-bs-content="The date and time at which a transaction is produced."
          ></i>
          Timestamp:
        </div>
        <div class="col-md-9" bis_skin_checked="1">
          <span id="clock"></span>
          <i class="far fa-clock small me-1"></i>48 days 7 hrs ago (
          <span id="showUtcLocalDate" data-timestamp="1685798183">
            Jun-03-2023 01:16:23 PM +UTC
          </span>
          )<span class="text-muted mx-1">|</span>
          <span class="text-muted" data-bs-toggle="tooltip">
            <i class="far fa-stopwatch me-1"></i>Confirmed within 15 secs
          </span>
        </div>
      </div>
    </div>

    <hr class="opacity-75 mt-0 mb-5" />

    <div class="row mb-4" bis_skin_checked="1">
      <div class="col-md-3 text-dt mb-2 mb-md-0" bis_skin_checked="1">
        <i
          class="far fa-question-circle me-1"
          data-bs-container="body"
          data-bs-toggle="popover"
          data-bs-trigger="hover"
          data-bs-placement="top"
          data-bs-original-title=""
          title=""
          data-bs-content="The sending party of the transaction."
        ></i>
        From:
      </div>
      <div class="col-md-9" bis_skin_checked="1">
        <div bis_skin_checked="1">
          <span class="me-1">
            <img
              src="/images/svg/brands/ud.svg"
              alt="Unstoppable Domains Name"
              width="13"
              class="filter-grayscale me-1"
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              data-bs-title="Unstoppable Domains Name"
            />
            <a
              href={`/address/${tx.from}`}
              target="_self"
              class="d-inline-flex align-items-center"
            >
              <span
                rel="tooltip"
                class="text-break hash-tag text-truncate"
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
          <a
            class="js-clipboard link-secondary"
            href="javascript:;"
            data-clipboard-text={tx.from}
            data-bs-toggle="tooltip"
            data-hs-clipboard-options='{
            "type": "tooltip",
            "successText": "Copied!",
            "classChangeTarget": "#linkIcon-2",
            "defaultClass": "fa-copy",
            "successClass": "fa-check"
        }'
            aria-label="Copy Address"
          >
            <i id="linkIcon-2" class="far fa-copy fa-fw"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="row mb-4" bis_skin_checked="1">
      <div class="col-md-3 text-dt mb-2 mb-md-0" bis_skin_checked="1">
        <i
          class="far fa-question-circle me-1"
          data-bs-container="body"
          data-bs-toggle="popover"
          data-bs-trigger="hover"
          data-bs-placement="top"
          data-bs-original-title=""
          title=""
          data-bs-content="The receiving party of the transaction (could be a contract address)."
        ></i>
        To:
      </div>
      <div class="col-md-9" bis_skin_checked="1">
        <div bis_skin_checked="1">
          <span class="me-1">
            <img
              src="/images/svg/brands/ens-new.svg"
              class="filter-grayscale me-1"
              width="13"
              data-bs-toggle="tooltip"
              data-bs-title="ENS Name"
              alt="ENS Name"
            />
            <a
              href={`/address/${tx.to}`}
              class="d-inline-flex align-items-center"
              target="_self"
            >
              <span
                rel="tooltip"
                class="text-break hash-tag text-truncate"
                data-bs-toggle="tooltip"
                data-bs-boundary="viewport"
                data-bs-trigger="hover"
                data-bs-html="true"
                data-bs-title={tx.to}
              >
                fishmeme.eth
              </span>
            </a>
          </span>
          <a
            class="js-clipboard link-secondary me-1"
            href="javascript:;"
            data-clipboard-text={tx.to}
            data-bs-toggle="tooltip"
            data-hs-clipboard-options='{
                "type": "tooltip",
                "successText": "Copied!",
                "classChangeTarget": "#linkIcon-3",
                "defaultClass": "fa-copy",
                "successClass": "fa-check"
            }'
            aria-label="Copy Address"
          >
            <i id="linkIcon-3" class="far fa-copy fa-fw"></i>
          </a>
        </div>
      </div>
    </div>

    <hr class="opacity-75 mt-0 mb-5" />

    <div class="row mb-4" bis_skin_checked="1">
      <div class="col-md-3 text-dt mb-2 mb-md-0" bis_skin_checked="1">
        <i
          class="far fa-question-circle me-1"
          data-bs-container="body"
          data-bs-toggle="popover"
          data-bs-trigger="hover"
          data-bs-placement="top"
          data-bs-original-title=""
          title=""
          data-bs-content="The value being transacted in Ether and fiat value. Note: You can click the fiat value (if available) to see historical value at the time of transaction."
        ></i>
        Value:
      </div>
      <div class="col-md-9" bis_skin_checked="1">
        <span id="ContentPlaceHolder1_spanValue">
          <div class="d-flex align-items-center gap-1" bis_skin_checked="1">
            <i class="fab fa-ethereum me-0.5 text-muted"></i>
            <span
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              data-bs-placement="top"
            >
              {parseInt(tx.value.hex)} ETH
            </span>
          </div>
        </span>
      </div>
    </div>

    <div id="ContentPlaceHolder1_divTxFee" bis_skin_checked="1">
      <div class="row mb-4" bis_skin_checked="1">
        <div class="col-md-3 text-dt mb-2 mb-md-0" bis_skin_checked="1">
          <i
            class="far fa-question-circle me-1"
            data-bs-container="body"
            data-bs-toggle="popover"
            data-bs-trigger="hover"
            data-bs-placement="top"
            data-bs-original-title=""
            title=""
            data-bs-content="Amount paid to process the transaction in Ether and fiat value."
          ></i>
          Transaction Fee:
        </div>
        <div class="col-md-9" bis_skin_checked="1">
          <span id="ContentPlaceHolder1_spanTxFee">
            <div class="d-flex align-items-center gap-1" bis_skin_checked="1">
              <span
                data-bs-toggle="tooltip"
                data-bs-trigger="hover"
                data-bs-placement="top"
              >
                0<b>.</b>000523695008214 ETH
              </span>
              <a
                class="badge bg-secondary bg-opacity-25 hover:bg-opacity-50 transition-all text-dark py-1.5"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-html="true"
                id="txfeebutton"
                data-bs-title="Displaying current Txn Fee; <br/> Click to show Txn Fee on Day of Txn"
                data-bs-trigger="hover"
              >
                $0.99
              </a>
            </div>
          </span>
        </div>
      </div>
    </div>

    <div class="row" bis_skin_checked="1">
      <div class="col-md-3 text-dt mb-2 mb-md-0" bis_skin_checked="1">
        <i
          class="far fa-question-circle me-1"
          data-bs-container="body"
          data-bs-toggle="popover"
          data-bs-trigger="hover"
          data-bs-placement="top"
          data-bs-original-title=""
          title=""
          data-bs-content="Cost per unit of gas spent for the transaction, in Ether and Gwei."
        ></i>
        Gas Price:
      </div>
      <div class="col-md-9" bis_skin_checked="1">
        <span id="ContentPlaceHolder1_spanGasPrice" data-bs-toggle="tooltip">
          24<b>.</b>937857534 Gwei
          <span class="text-muted">
            (0<b>.</b>000000024937857534 ETH)
          </span>
        </span>
      </div>
    </div>
  </div>
</>;
