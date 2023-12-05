function calculateTotalSpentByCategory(transactions) {
  let categorytotal = {};
  for (const transaction of transactions) {
    const category = transaction.category;
    const price = transaction.price;
    if (category in categorytotal) {
      categorytotal[category] += price;
    } else {
      categorytotal[category] = price;
    }
  }

  const result = Object.entries(categorytotal).map(([category, total]) => ({
    category: category,
    total_amount_spend: total,
  }));

  return result;
}

let finaltotal = calculateTotalSpentByCategory({
  id: 1,
  timestamp: 1656076800000,
  price: 10,
  category: "Food",
  itemName: "Pizza",
});
console.log(finaltotal);
