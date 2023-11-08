function TokenList({ token }) {
  return (
    <li class="list-group-item">
      <a
        class="nav-link d-flex justify-content-between align-items-center gap-2 px-2"
        href={`/token/${token.contractAddress}`}
      >
        <div bis_skin_checked="1">
          <div class="d-flex align-items-center gap-1" bis_skin_checked="1">
            <img
              src={
                token.logo
                  ? token.logo
                  : "https://etherscan.io/images/main/empty-token.png"
              }
              width="14"
              height="14"
              class="rounded-circle"
              alt={token.symbol}
            />
            <div class="d-flex gap-1" bis_skin_checked="1">
              <span class="list-name hash-tag text-truncate">
                <span class="text-truncate" data-bs-toggle="tooltip">
                  {token.name}
                </span>{" "}
                (
                <span class="text-truncate" data-bs-toggle="tooltip">
                  {token.symbol}
                </span>
                )
              </span>
            </div>
          </div>
          <span class="text-muted">
            {token.balance} {token.symbol}
          </span>
        </div>
      </a>
    </li>
  );
}

export default TokenList;
