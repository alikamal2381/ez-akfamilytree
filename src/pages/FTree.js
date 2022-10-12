import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

function Ftree({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

//https://github.com/jonasgroendahl/react-d3-tree-bfs

export default Ftree;