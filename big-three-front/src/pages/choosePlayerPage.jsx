import { useState } from "react";
import { Button } from "../components/buttons";
import { Input, Select } from "../components/input";
export function ChoosePlayerPage() {
  const [player, setPlayer] = useState({ id: 1, name: "", level: 1, sets: [], score:0 });
  const handleCreatePlayer = () => {};
  return (
    <form onSubmit={handleCreatePlayer}>
      <Input type="hidden" name="playerId" value={1} />
      <Input
        name="playerName"
        placeholder="Nom du joueur"
        required={true}
        inputValue={player.name}
        onChange={(event) => setPlayer({ ...player, name: event.target.value })}
      />
      <Select
      label="Niveau du joueur"
        value={player.level}
        onChange={(event) =>
          setPlayer({ ...player, level: event.target.value })
        }
        name="Niveau du joueur"
        type="select"
        required={true}
        options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        placeholder="Niveau du joueur"
      />

      <Button role="submit" type="submit">
        Créer un joueur
      </Button>
    </form>
  );
}
