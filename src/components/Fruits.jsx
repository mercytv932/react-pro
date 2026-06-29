function Fruits() {
  const fruits = ["Apple ", "Mango ", "Banana ", " Orange ", "Pineapple"];
  return (
    <div className="fruits">
      <ul>
        {fruits.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default Fruits;
