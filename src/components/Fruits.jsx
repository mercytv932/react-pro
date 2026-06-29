function Fruits() {
  const fruits = ["Apple ", "Mango ", "Banana ", " Orange ", "Pineapple"];
  return (
    <div className="fruits">
      {fruits.map((fruit) => (
        <h1>{fruit}</h1>
      ))}
    </div>
  );
}

export default Fruits;
