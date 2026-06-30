import Fruit from "./Fruit";
function Fruits() {
  // const fruits = ["Apple ", "Mango ", "Banana ", " Orange ", "Pineapple"];
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎" },
    { name: "Mango", price: 12, emoji: "🥭" },
    { name: "Banana", price: 14, emoji: "🍌" },
    { name: "Orange", price: 16, emoji: "🍊" },
    { name: "Pineaaple", price: 18, emoji: "🥭" },
  ];

  return (
    <div className="fruits">
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            key={fruit.name}
            name={fruit.name}
            price={fruit.price}
            emoji={fruit.emoji}
          />
        ))}
      </ul>
    </div>
  );
}

export default Fruits;
