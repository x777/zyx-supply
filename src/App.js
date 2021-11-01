/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import axios from "axios";

const ADDR_LIST = [
  "0x0000000000000000000000000000000000001000",
  "0x0000000000000000000000000000000000002002",
  "0x0000000000000000000000000000000000002001",
  "0x7191c48d168dB12121C01f5C645e0c2cd0A030ec",
];

const TOTAL_SUPPLY = 900000000 * Math.pow(10, 8);

function App() {
  const [totalBalance, setTotalBalance] = useState(null);
  const [cirkSupply, setCirkSupply] = useState(null);

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `https://zyxscan.com/api/?module=account&action=balancemulti&address=${ADDR_LIST}`
      );

      console.log(data);

      let summaryBalance = 0;
      data.result.map((item) => {
        summaryBalance += parseInt(item.balance);
        summaryBalance = summaryBalance / Math.pow(10, 8);
      });
      let cirulatingSuppy = (TOTAL_SUPPLY - summaryBalance) / Math.pow(10, 8);
      console.log(summaryBalance > TOTAL_SUPPLY);
      setCirkSupply(cirulatingSuppy);
      setTotalBalance(summaryBalance);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getData();
    const interval = setInterval(() => {
      getData();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* <BasicTable/> */}
      <h1>Circulating supply</h1>
      {cirkSupply && totalBalance && (
        <div>
          <h4>Total balance on accounts: {totalBalance}</h4>
          <h4>Circulating supply: {cirkSupply}</h4>
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
