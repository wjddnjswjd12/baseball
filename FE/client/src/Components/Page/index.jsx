import React, { createContext, useEffect, useState } from "react";
import Home from "Components/Home";
import GamePage from "Components/GamePage";
import { Router, Route } from "utils/BeemoRouter";
import io from "socket.io-client";

export const PageContext = createContext();
const socket = io.connect("http://localhost:3001");

const Page = () => {
  const [playerId, setPlayerId] = useState();

  const [playerName, setPlayerName] = useState();

  useEffect(() => {
    const connectSocket = () => {
      socket.emit("init");
      socket.on("playerId", (playerId) => {
        setPlayerId(playerId);
      });
    };
    connectSocket();
  }, []);

  useEffect(() => {
    // const pName = window.prompt("플레이어 이름을 입력하세요!");
    // setPlayerName(pName);
    socket.emit("playerName", { playerName });
  }, []);

  return (
    <Router>
      <PageContext.Provider value={{ playerId, socket }}>
        <Route path="/" component={Home} />
        <Route path="/GamePage/1" component={GamePage} />
        <Route path="/GamePage/2" component={GamePage} />
        <Route path="/GamePage/3" component={GamePage} />
        <Route path="/GamePage/4" component={GamePage} />
        <Route path="/GamePage/5" component={GamePage} />
      </PageContext.Provider>
    </Router>
  );
};

export default Page;
