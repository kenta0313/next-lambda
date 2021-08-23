import { ApolloProvider } from "@apollo/client"
import { apolloClient } from "../graphql/client"

function App() {
    return (
        <ApolloProvider client={apolloClient}> 
            <div>pokemon-graphql-practice</div>
        </ApolloProvider> // 追加
    )
}

export default App