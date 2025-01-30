import { useState } from "react";

import { Button } from "../components/buttons";

import { GetPoints } from "../functions/getPoints";

import { useScore } from "../services/apiCalls";

import { Row, Table } from "../components/table";

export default function TennisCourtPage() {
  const [listPoints, setListPoints] = useState([]);
  const [play, setPlay] = useState(false);
  const [score, setScore] = useState({});

  //dummy data
  const players = [
    { name: "Andrew", playerNumber: 1, level: 8, sets: [6, 7, 6], score: 3 },
    { name: "Josh", playerNumber: 2, level: 5, sets: [2, 5, 4], score: 0 },
  ];

  const listSets = [
    [6, 7, 6],
    [2, 5, 4],
    [4, 6, 7],
  ];

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
          console.log("data", data);
          setScore(() => ({ ...data }));
        },
      }
    );
  };

  return (
    <div>
      <h1>Tennis Court Page</h1>
      <Table data={players} setsNumber={3} gameOnGoing={true} listSets={listSets}/>
      {console.log("score", score)}
      {play && (
        <ul>
          {listPoints.map((point, index) => {
            const player = players.find(
              (player) => player.playerNumber === point
            );
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
