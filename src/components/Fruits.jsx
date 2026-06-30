function Fruits() {
  // const fruits = ["Apple ", "Mango ", "Banana ", " Orange ", "Pineapple"];
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎" },
    { name: "Mango", price: 12, emoji: "🥭" },
    { name: "Banana", price: 14, emoji: "🍌" },
    { name: "Orange", price: 16, emoji: "🍊" },
    { name: "Pineaaple", price: 18, emoji: "🍎" },
  ];

  return (
    <div className="fruits">
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.name}>
            {fruit.emoji} {fruit.name} {fruit.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fruits;
