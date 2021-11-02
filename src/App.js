/* eslint-disable no-undef */
import { useEffect, useState, useRef } from "react";

import axios from "axios";
import SupplyCard from "./Card";
import Web3 from "web3";

const web3 = new Web3();
const ADDR_LIST = [
  "0x0000000000000000000000000000000000001000",
  "0x0000000000000000000000000000000000002001",
  "0x0000000000000000000000000000000000002002",
  "0x7191c48d168dB12121C01f5C645e0c2cd0A030ec",
];

const SPECIAL_ACCOUNTS = ["0x0000000000000000000000000000000000001000"];

// var TOTAL_SUPPLY = 900000000 * Math.pow(10, 10);

function App() {
  const FIXED_TOTAL = 900000000;
  const [locked, setLocked] = useState(null);
  const [total, setTotal] = useState(null);
  const [cirkulatedSupply, setCirkSupply] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get(
          `https://zyxscan.com/api/?module=account&action=balancemulti&address=${ADDR_LIST}`
        );

        console.log(data);

        // summary balance for all accounts
        let summaryBalance = 0;
        // summary balance of special accounts
        let specialAccountsSummBalance = 0;
        data.result.map((item) => {
          summaryBalance += parseInt(web3.utils.fromWei(item.balance)); // / Math.pow(10, 8);
          // Check if account is SPECIAL
          SPECIAL_ACCOUNTS.map((account) => {
            if (account == item.account) {
              // Summ special account balance
              specialAccountsSummBalance += parseInt(
                web3.utils.fromWei(item.balance)
              );
            }
          });
        });

        // "TOTAL" value
        let total = FIXED_TOTAL - specialAccountsSummBalance;

        // circulating supply
        let cirulatingSupply = FIXED_TOTAL - summaryBalance;

        // locked supply
        let locked = FIXED_TOTAL - cirkulatedSupply;

        setTotal(total);
        setCirkSupply(cirulatingSupply);
        setLocked(locked);
      } catch (err) {
        console.error(err.message);
      }
    }
    getData();
    const interval = setInterval(() => {
      getData();
    }, 15000);

    return () => clearInterval(interval);
  }, [cirkulatedSupply]);

  return (
    <div>
      {/* <BasicTable/> */}
      {cirkulatedSupply && (
        <div>
          <SupplyCard supply={cirkulatedSupply} title="Circulating supply" />
          <br />
          <SupplyCard supply={FIXED_TOTAL} title="Max supply" />
          <br />
          <SupplyCard supply={locked} title="Locked" />
          <br />
          <SupplyCard supply={total} title="Total" />
          {/* <h4>Total balance on accounts: {totalBalance}</h4> */}
        </div>
        // <ul>
        //   {cirkSupply.map((item, index) => (
        //     <li key={index}>{900000000 - item.balance}</li>
        //   ))}
        // </ul>
      )}
    </div>
  );
}

export default App;
