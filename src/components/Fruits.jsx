import Fruit from "./Fruit";
function Fruits() {
  // const fruits = ["Apple ", "Mango ", "Banana ", " Orange ", "Pineapple"];
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎", soldOut: false },
    { name: "Mango", price: 12, emoji: "🥭", soldOut: true },
    { name: "Banana", price: 14, emoji: "🍌", soldOut: false },
    { name: "Orange", price: 16, emoji: "🍊", soldOut: true },
    { name: "Pineaaple", price: 18, emoji: "🥭", soldOut: false },
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
            soldOut={fruit.soldOut}
          />
        ))}
      </ul>
    </div>
  );
}

export default Fruits;
