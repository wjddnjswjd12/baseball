const express = require("express");
const app = express();
const port = 3001; //포트 번호 3001
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

let players = {};
let room1 = [];
let room2 = [];
let room3 = [];
let room4 = [];
let room5 = [];
let playerInfo = new Object();

io.on("connection", (socket) => {
  socket.emit(
    "setSelectedTeam",
    Object.values(players).map((player) => player.team)
  );
  socket.on("init", () => {
    console.log("init");
    playerInfo.playerId = socket.id;
    players[socket.id] = { playerId: playerInfo.playerId };
    socket.emit("playerId", socket.id);

    console.log(players);
  });

  socket.on(
    "chooseGame",
    ({ playerId, gameId, teamName, isHomeTeam, isAttack, teamId, members }) => {
      // io.to('room1').emit('selectedTeam', teamName);
      playerInfo.currentGameId = gameId;
      players[playerId] = {
        ...players[playerId],
        currentGameId: gameId,
        team: teamName,
        isHomeTeam: isHomeTeam,
        isAttack: isAttack,
        teamId: teamId,
        members: members,
      };
      io.sockets
        .in(room1)
        .in(room2)
        .in(room3)
        .in(room4)
        .in(room5)
        .emit(
          "setSelectedTeam",
          Object.values(players).map((player) => player.team)
        );
      switch (gameId) {
        case 1:
          socket.join("room1");
          room1.push(players[playerId]);
          break;
        case 2:
          socket.join("room2");
          room2.push(players[playerId]);
          break;
        case 3:
          socket.join("room3");
          room3.push(players[playerId]);
          break;
        case 4:
          socket.join("room4");
          room4.push(players[playerId]);
          break;
        case 5:
          socket.join("room5");
          room5.push(players[playerId]);
          break;
        default:
          return;
      }

      console.log(players);
    }
  );

  socket.on("enterGame", (playerId) => {
    console.log("플레이어", playerId, " 입장");

    if (players[playerId].isHomeTeam) {
      io.sockets
        .in(`room${players[playerId].currentGameId}`)
        .emit("playerData", { home: players[playerId] });
    } else {
      io.sockets
        .in(`room${players[playerId].currentGameId}`)
        .emit("playerData", { away: players[playerId] });
    }

    io.sockets
      .in(`room${players[playerId].currentGameId}`)
      .emit("playerData", players[playerId]);

    if (room1.length === 2) io.sockets.in("room1").emit("isReady", true);
    if (room2.length === 2) io.sockets.in("room2").emit("isReady", true);
    if (room3.length === 2) io.sockets.in("room3").emit("isReady", true);
    if (room4.length === 2) io.sockets.in("room3").emit("isReady", true);
    if (room5.length === 2) io.sockets.in("room3").emit("isReady", true);
  });

  socket.on("disconnect", () => {
    // socket.leave(`room${players[socket.id].currentGameId}`); //disconnect하면 자동으로 leave가 됨
    console.log("disconnected");
  });
});

http.listen(port, () => {
  console.log(`app listening on port : ${port}`);
});
