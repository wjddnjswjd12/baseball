const express = require("express");
const app = express();
const port = 3001; //포트 번호 3001
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

let players = {};
let playerInfo = new Object();

io.on("connection", (socket) => {
  socket.on("init", () => {
    console.log("init");
    socket.join("room1");
    playerInfo.playerId = socket.id;
    players[socket.id] = { playerId: playerInfo.playerId };

    socket.emit("playerId", socket.id);

    console.log(players);
  });

  socket.on("chooseGame", ({ playerId, gameId, teamName }) => {
    // io.to('room1').emit('selectedTeam', teamName);
    playerInfo.currentGameId = gameId;
    players[playerId] = {
      ...players[playerId],
      currentGameId: gameId,
      team: teamName,
    };
    io.sockets.in("room1").emit(
      "setSelectedTeam",
      Object.values(players).map((player) => player.team)
    );
    console.log("고른 팀 이름", teamName);
    console.log(players);
  });

  socket.on("disconnect", () => {
    // socket.leave('room1'); //disconnect하면 자동으로 leave가 됨
    console.log("disconnected");
  });
});

http.listen(port, () => {
  console.log(`app listening on port : ${port}`);
});
