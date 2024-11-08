/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buy = 0;
    let sell = 1;
    let max_profit = 0;
    let profit;

    while (sell < prices.length) {
        if (prices[buy] < prices[sell]) {
            profit = prices[sell] - prices[buy];

            max_profit = Math.max(max_profit, profit);
        } else {
            buy = sell;
        }
        sell++;
    }

    return max_profit;
};