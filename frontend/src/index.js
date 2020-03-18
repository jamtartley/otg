import {ApolloClient, HttpLink, gql, InMemoryCache} from 'apollo-boost'
import {ApolloProvider, useQuery} from '@apollo/react-hooks';
import {render} from 'react-dom';
import React, {Component} from 'react';
import "./index.css";

const endPointUrl = 'http://localhost:9000/graphql'
const client = new ApolloClient({
  link: new HttpLink({uri:endPointUrl}),
  cache: new InMemoryCache()
});

const allThingsQuery = gql`
  {
    allThings {
      id
      name
    }
  }
`;

const Things = () => {
  const { loading, error, data } = useQuery(allThingsQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return data.allThings.map(({id, name}) => (
    <div key={id}>
      <p>
        {name}
      </p>
    </div>
  ))
}

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h1>OnTheGo Interview</h1>
      <Things/>
    </div>
  </ApolloProvider>
);

render(<App />, document.getElementById('root'));
