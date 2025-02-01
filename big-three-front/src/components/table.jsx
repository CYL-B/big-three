export function Table({ data, listSets, gameOnGoing }) {
  return (
    <table>
      <tbody>
        <tr>
          <th scope="col">
            <span>Player</span>
          </th>
          {listSets &&
            listSets.map((set, index) => (
              <th key={`key-${index}`}>
                <span>Set {index + 1}</span>
              </th>
            ))}
          {!gameOnGoing && (
            <th scope="col">
              <span>Current Game</span>
            </th>
          )}
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
        <td>
          <span>{name}</span>
        </td>
        {sets.length > 0 &&
          sets.map((set, index) => (
            <td key={`key-${index}`}>
              <span>{set}</span>
            </td>
          ))}
        {score && (
          <td>
            <span>{score}</span>
          </td>
        )}
      </tr>
    </>
  );
}
