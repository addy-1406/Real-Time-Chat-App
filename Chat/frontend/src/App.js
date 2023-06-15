import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Homepage from "./Pages/Homepage";
import ChatPage from "./Pages/ChatPage";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Route path="/" component={Homepage} exact />
        <Route path="/chats" component={ChatPage} />
      </div>
    </ChakraProvider>
  );
}

export default App;