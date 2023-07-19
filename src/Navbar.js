import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import alchemy from "./alchemy";

function Navbar() {
  // const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    // Trim leading and trailing whitespaces from the search value
    const trimmedSearchValue = searchValue.trim();
    let url = "";

    if (trimmedSearchValue) {
      // Check the type of search based on user input
      if (isValidAddress(trimmedSearchValue)) {
        // Redirect to EOA component with the searched EOA address
        if (isContractAddress(trimmedSearchValue)) {
          url = `/token/${trimmedSearchValue}`;
        } else {
          url = `/address/${trimmedSearchValue}`;
        }
      } else if (isValidHash(trimmedSearchValue)) {
        // Redirect to Block component with the searched block number or hash
        if (isTxHash(trimmedSearchValue)) {
          url = `/tx/${trimmedSearchValue}`;
        } else {
          url = `/block/${trimmedSearchValue}`;
        }
      } else if (isValidDomain(trimmedSearchValue)) {
        // Redirect to Domain component with the searched domain name
        url = `/address/${trimmedSearchValue}`;
      } else {
        // Invalid search input, handle accordingly (e.g., show an error message)
        console.log("Invalid search input");
      }
    }
    window.location.href = url;
  };

  const isContractAddress = async (input) => {
    const bool = await alchemy.core.isContractAddress(input);
    return bool;
  };
  const isTxHash = async (input) => {
    const data = await alchemy.transact.getTransaction(input);
    return Boolean(data);
  };

  const isValidAddress = (input) => {
    // EOA addresses should be 40 characters long and consist of hexadecimal digits
    const addressRegex = /^0x[0-9a-fA-F]{40}$/;
    return addressRegex.test(input);
  };

  const isValidHash = (input) => {
    // Block numbers should be positive integers or block hashes should be 64 characters long
    const numberRegex = /^\d+$/;
    const hashRegex = /^0x[0-9a-fA-F]{64}$/;

    return numberRegex.test(input) || hashRegex.test(input);
  };

  const isValidDomain = (input) => {
    // Domain names can have alphanumeric characters and hyphens, separated by periods
    const domainRegex = /^([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    return domainRegex.test(input);
  };

  return (
    <nav>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </nav>
  );
}

export default Navbar;
