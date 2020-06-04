const { add, subtract } = require('./pure');

console.log(`It should sum 1 and 2 and returns 3`);
if (add(1, 2) === 3) {
  console.log(`✅ Passed`);
} else {
  console.log(`❌ Failed`);
}
console.log(`It should subtract 3 minus 2 and returns 1`);
if (subtract(3, 2) === 1) {
  console.log(`✅ Passed`);
} else {
  console.log(`❌ Failed`);
}
