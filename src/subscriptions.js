// const ADDRESSES_QUERY = gql`
// {
//   addresses(
//     hashes: [
//       "0x0000000000000000000000000000000000001000"
//       "0x0000000000000000000000000000000000002002"
//       "0x0000000000000000000000000000000000002001"
//       "0x7191c48d168dB12121C01f5C645e0c2cd0A030ec"
//     ]
//   ) {
//     hash
//     fetchedCoinBalance
//     fetchedCoinBalanceBlockNumber
//   }
// }
// `;

// const SUBS_TRANSFER_ADDR_1 = gql`
//   subscription getTransfer {
//     tokenTransfers(
//       tokenContractAddressHash: "0x0000000000000000000000000000000000001000"
//     ) {
//       amount
//     }
//   }
// `;

// const SUBS_TRANSFER_ADDR_2 = gql`
//   subscription getTransfer {
//     tokenTransfers(
//       tokenContractAddressHash: "0x0000000000000000000000000000000000002002"
//     ) {
//       amount
//     }
//   }
// `;

// const SUBS_TRANSFER_ADDR_3 = gql`
//   subscription getTransfer {
//     tokenTransfers(
//       tokenContractAddressHash: "0x0000000000000000000000000000000000002001"
//     ) {
//       amount
//     }
//   }
// `;

// const SUBS_TRANSFER_ADDR_4 = gql`
//   subscription getTransfer {
//     tokenTransfers(
//       tokenContractAddressHash: "0x7191c48d168dB12121C01f5C645e0c2cd0A030ec"
//     ) {
//       amount
//     }
//   }
// `;
