import { useState } from "react";

import { Button } from "../components/buttons";

import { GetPoints } from "../functions/getPoints";

import { useScore } from "../services/apiCalls";

import { Table } from "../components/table";

export default function TennisCourtPage() {
  const player1 = JSON.parse(sessionStorage.getItem("player1"));
  const player2 = JSON.parse(sessionStorage.getItem("player2"));
  const [listPoints, setListPoints] = useState([]);
  const [play, setPlay] = useState(false);
  const [score, setScore] = useState({});
  const [players, setPlayers] = useState([player1, player2]);

  const { mutation } = useScore();

  const handlePlay = () => {
    let result = GetPoints(players);
    setListPoints([...result]);
    setPlay(true);
  };

  const handleScore = () => {
    mutation.mutate(
      {
        listPoints,
      },
      {
        onSuccess: (data) => {
          setScore(() => ({ ...data }));

          setPlayers(
            players.map((player) => {
              if (player.id == 1) {
                return {
                  ...player,
                  score: data.score1,
                  sets: [...data.setPlayer1],
                };
              }
              if (player.id == 2) {
                return {
                  ...player,
                  score: data.score2,
                  sets: [...data.setPlayer2],
                };
              }
            })
          );
        },
      }
    );
  };

  return (
    <div>
      <h1>Tennis Court Page</h1>
      <Table
        data={players}
        gameOnGoing={score.matchWon}
        listSets={score.sets}
      />
      {play && (
        <ul>
          {listPoints.map((point, index) => {
            const player = players.find((player) => player.id === point);
            return (
              <li key={player.name + "" + index + 1}>
                - Point {index + 1} : remporté par {player.name}
              </li>
            );
          })}
        </ul>
      )}
      <Button onClick={handlePlay}>Lancer le jeu</Button>
      {play && <Button onClick={handleScore}>Calculer le score</Button>}
    </div>
  );
}
