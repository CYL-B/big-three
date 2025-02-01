import { useState } from "react";
import { Button } from "./buttons";
import { Input, Select } from "./input";
import { useNavigate, useParams } from "react-router";
export function PlayerForm() {
  const { id } = useParams();
  const num = Number(id);

  const [player, setPlayer] = useState({
    id: num,
    name: "",
    level: 1,
    sets: [],
    score: 0,
  });
  const navigate = useNavigate();

  const handleCreatePlayer = (event) => {
    setPlayer((prev) => ({
      ...prev,
      id: num,
      name: event.playerName,
      level: event.level,
    }));
    sessionStorage.setItem(`player${num}`, JSON.stringify(player));
    if (num === 1) {
      navigate("/select/2");
    } else {
      navigate("/tennis-court");
    }
  };
  return (
    <div>
      <form onSubmit={handleCreatePlayer}>
        <Input
          name="playerName"
          placeholder="Nom du joueur"
          required={true}
          inputValue={player.name}
          onChange={(e) => setPlayer({ ...player, name: e.target.value })}
        />
        <Select
          label="Niveau du joueur"
          value={player.level}
          onChange={(e) => setPlayer({ ...player, level: e.target.value })}
          name="level"
          type="select"
          required={true}
          options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          placeholder="Niveau du joueur"
        />
        <Button role="submit" type="submit">
          Créer un joueur {id}
        </Button>
      </form>
    </div>
  );
}
