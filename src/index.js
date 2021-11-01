import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

// const client = new ApolloClient({
//   uri: "https://zyxscan.com/graphql/",
//   cache: new InMemoryCache(),
// });

ReactDOM.render(
  // <ApolloProvider client={client}>
  // </ApolloProvider>,
  <App />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
