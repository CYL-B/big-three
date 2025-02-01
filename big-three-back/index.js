// index.js
const fastify = require("fastify")();
fastify.register(require("@fastify/cors"), {
  origin: "http://localhost:5173", // React app's URL
  methods: ["POST", "GET", "OPTIONS"], // Allow the methods you need
  credentials: true,
});

fastify.get("/", async (request, reply) => {
  return { message: "Welcome to my Fastify app!" };
});

fastify.post("/score", async (request, reply) => {
  const data = request.body.result.listPoints;
  let score1 = 0;
  let score2 = 0;
  let tiebreak = false;
  let deuce = false;
  let gamePlaying = [score1, score2];
  let gamesWon = [0, 0];
  let matchWon = false;
  let sets = [];
  let setsWon1 = 0;
  let setsWon2 = 0;
  let setPlayer1 = [];
  let setPlayer2 = [];

  const getGameScore = (score) => {
    if (score === 0) return "0";
    if (score === 1) return "15";
    if (score === 2) return "30";
    if (score === 3) return "40";
    return "Advantage";
  };

  for (let i = 0; i < data.length; i++) {
    if (data[i] == 1) {
      score1 += 1;
    } else {
      score2 += 1;
    }

    if (!tiebreak && !deuce) {
      if (score1 == 4 && score2 < 3) {
        gamesWon[0] += 1;
        score1 = 0;
        score2 = 0;
      } else if (score2 == 4 && score1 < 3) {
        gamesWon[1] += 1;
        score1 = 0;
        score2 = 0;
      } else if (score1 == 4 && score2 == 4) {
        deuce = true;
      }
    }

    if (gamesWon[0] == 6 && gamesWon[1] < 5) {
      sets.push([gamesWon[0], gamesWon[1]]);
      setPlayer1.push(gamesWon[0]);
      setPlayer2.push(gamesWon[1]);
      score1 = 0;
      score2 = 0;
      gamesWon = [0, 0];
      setsWon1 += 1;
      if (setsWon1 == 3 && setsWon2 <= 2) {
        matchWon = true;
        console.log("Match won by player1");
        break;
      }
    } else if (gamesWon[1] == 6 && gamesWon[0] < 5) {
      sets.push([gamesWon[0], gamesWon[1]]);
      setPlayer1.push(gamesWon[0]);
      setPlayer2.push(gamesWon[1]);
      score1 = 0;
      score2 = 0;
      gamesWon = [0, 0];
      setsWon2 += 1;
      if (setsWon2 == 3 && setsWon1 <= 2) {
        matchWon = true;
        console.log("Match won by player 2");
        break;
      }
    }

    if (
      (gamesWon[0] == 6 && gamesWon[1] >= 5) ||
      (gamesWon[0] >= 5 && gamesWon[1] == 6)
    ) {
      tiebreak = true;
    }

    if (tiebreak) {
      if (score1 >= 7 && score1 - score2 >= 2) {
        gamesWon[0] += 1;
        sets.push([gamesWon[0], gamesWon[1]]);
        setPlayer1.push(gamesWon[0]);
        setPlayer2.push(gamesWon[1]);
        score1 = 0;
        score2 = 0;
        gamesWon = [0, 0];
        tiebreak = false;
      } else if (score2 >= 7 && score2 - score1 >= 2) {
        gamesWon[1] += 1;
        sets.push([gamesWon[0], gamesWon[1]]);
        setPlayer1.push(gamesWon[0]);
        setPlayer2.push(gamesWon[1]);
        score1 = 0;
        score2 = 0;
        gamesWon = [0, 0];
        tiebreak = false;
      }
    }

    if (score1 === 3 && score2 === 3) {
      deuce = true;
    }

    if (deuce) {
      if (score1 == 5 && score1 - score2 == 2) {
        gamesWon[0] += 1;
        score1 = 0;
        score2 = 0;
        deuce = false;
      } else if (score2 == 5 && score2 - score1 === 2) {
        gamesWon[1] += 1;
        score1 = 0;
        score2 = 0;
        deuce = false;
      } else if (score1 == 4 && score1 - score2 == 1) {
        getGameScore(score1);
      } else if (score2 == 4 && score2 - score1 == 1) {
        getGameScore(score2);
      } else {
        score1 = 3;
        score2 = 3;
      }
    }
    console.log("sets", sets);
  }
  console.log("sets", sets);
  console.log("gameswon", gamesWon);
  console.log("gamesplaying", gamePlaying);
  console.log("score1", score1);
  console.log(score2);
  reply.send({
    sets: sets,
    gamesWon: gamesWon,
    gamePlaying: gamePlaying,
    score1: score1,
    score2: score2,
    setPlayer1: setPlayer1,
    setPlayer2: setPlayer2,
    matchWon: matchWon,
  });
});

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Server is running on port 3000");
});
