import React, { createContext, useEffect, useState } from "react";
import Home from "Components/Home";
import GamePage from "Components/GamePage";
import { Router, Route } from "utils/BeemoRouter";
import io from "socket.io-client";

export const PageContext = createContext();
const socket = io.connect("http://localhost:3001");

const Page = () => {
  const [playerId, setPlayerId] = useState();
  const [selectedTeam, setSelectedTeam] = useState([]);
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
    socket.on("setSelectedTeam", (data) => {
      console.log(data);
      setSelectedTeam([...data]);
    });
  }, []);

  return (
    <Router>
      <PageContext.Provider
        value={{ playerId, socket, selectedTeam, setSelectedTeam }}
      >
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
