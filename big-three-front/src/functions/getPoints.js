export function GetPoints(players) {
  // Étape 1 : Calculer la somme des poids
  // const totalWeight = levels.reduce((current, level) => current + level, 0);

  // var listPoints = [];

  // for (let i = 0; i <= 150; i++) {
  //   // Étape 2 : Générer un nombre aléatoire entre 0 et totalWeight
  //   const random = Math.random() * totalWeight;

  //   // Étape 3 : Parcourir les éléments et sélectionner l'un d'eux
  //   let cumulativeWeight = 0;

  //   for (let i = 0; i < players.length; i++) {
  //     cumulativeWeight += levels[i]; // Ajouter le poids de l'élément actuel
  //     if (random < cumulativeWeight) {
  //       return players[i]; // Retourner l'élément sélectionné
  //     }
  //   }
  //   listPoints.push(players[i]);
  // }

  let listPoints = [];

  let weight = players.flatMap(({ id, level }) => Array(level).fill(id));
  console.log(weight, "result");
  let lengthWeight = Number(weight.length);
  console.log(lengthWeight, "lengthArr");

  do {
    let randomPoint = Math.floor(Math.random() * lengthWeight);
    let randomGamePoint = weight[randomPoint];
    listPoints.push(randomGamePoint);
  } while (listPoints.length < 150);

  return listPoints;
}
