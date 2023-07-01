const maxProfit = function (prices) {
  // Constraints
  // 1) Each position in the array represents a day. If you buy on day 1, you can only sell on day two or any following day.
  // 2) The array of prices must have a length greater than 1 for the problem to work.
  // 3) If 'i' is my base case, and there is no number in the array greater than 'i', my profit is equal to zero.

  // Minimal condition for the problem to have a solution
  if (prices.length <= 1) return 0;

  // Not the most efficient way of solving the problem
  // let priceToBuy;
  // let priceToSell;
  // const answer = { buy: 0, sell: 0 };

  // for (let i = 0; i < prices.length; i++) {
  //   priceToBuy = Number(prices[i]);

  //   if (Math.max(...prices.slice(i + 1)) < priceToBuy) {
  //     continue;
  //   }

  //   for (let j = i; j < prices.length; j++) {
  //     priceToSell = Number(prices[j]);
  //     const profit = priceToSell - priceToBuy;

  //     if (profit > answer.sell - answer.buy) {
  //       answer.buy = priceToBuy;
  //       answer.sell = priceToSell;
  //     }
  //   }
  // }

  // const finalProfit = answer.sell - answer.buy;
  // if (finalProfit > 0) return finalProfit;
  // return 0;

  let left = 0;
  let right = 1;
  let maxProfit = 0;

  while (right < prices.length) {
    // Can I make a profit in order to compare it to the initial profit? If not, new initial min.
    if (prices[left] < prices[right]) {
      const profit = prices[right] - prices[left];
      if (maxProfit < profit) maxProfit = profit;
    } else {
      left = right;
    }
    console.log(`left: ${left} right:${right} profit:${maxProfit}`);
    right++;
  }

  return maxProfit;
};

maxProfit([7, 6, 8, 3, 1]);
