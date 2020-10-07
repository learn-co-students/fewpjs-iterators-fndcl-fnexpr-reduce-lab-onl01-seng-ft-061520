const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function total(total, arr) {
  return total + arr;
}
const totalBatteries = batteryBatches.reduce(total);
//sum of all battery amts in teh batteryBatches array
