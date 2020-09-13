import React from "react";
import { Router, Scene } from "react-native-router-flux";

import Home from "./src/screens/Home";
import Chat from "./src/screens/Chat";

export default function App() {
  return (
    <Router>
      <Scene key="root">
        <Scene key="home" component={Home} hideNavBar="false" />
        <Scene key="chat" component={Chat} title="Bate-Papo" />
      </Scene>
    </Router>
  );
}