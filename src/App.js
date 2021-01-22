import React from "react";
import client from './client';
import { ApolloProvider, useQuery, gql} from '@apollo/client';


const EXCHANGE_RATES = gql`
    query GetExchangeRates {
        rates(currency: "USD") {
            currency
            rate
        }
    }
`;

function ExchangeRates() {
    const { loading, error, data } = useQuery(EXCHANGE_RATES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
            <p>
                {currency}: {rate}
            </p>
        </div>
    ));
}

function App() {
  return (
      <ApolloProvider client={client}>
        <div className="App">
         <ExchangeRates />
        </div>
      </ApolloProvider>
  );
}

export default App;
