export function Table({ data, listSets, gameOnGoing }) {
  return (
    <table>
      <tbody>
        <tr>
          <th scope="col">Player</th>
          {listSets && listSets.map((set, index) => <th key={`key-${index}`}>Set {index + 1}</th>)}
          {gameOnGoing && <th scope="col">Current Game</th>}
        </tr>
        {data.map((row, index) => (
          <Row key={`key-${index}`} {...row} />
        ))}
      </tbody>
    </table>
  );
}

export function Row({ name, sets, score }) {
  return (
    <>
      <tr>
        <td>{name}</td>
        {sets.length > 0 &&
          sets.map((set, index) => <td key={`key-${index}`}>{set}</td>)}
        {score && <td>{score}</td>}
      </tr>
    </>
  );
}
