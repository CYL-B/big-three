import { Link } from "react-router";
export function ChoosePlayerPage() {
  return (
    <div id="choosePlayerPage">
      <Link to="/select/1"> Ajouter le joueur 1</Link>
      <Link to="/select/2"> Ajouter le joueur 2</Link>
    </div>
  );
}
