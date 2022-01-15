/**
 * Pure teste
 *
 * Tiny util to show how test without frameworks
 * Minimal implementation
 */


/**
 * Pure tester
 * params:
 * @param {string} given - a description of the given scenario
 * @param {string} should - a description of the expected behavior
 * @param {any} actual - the real value obtained from the scenario
 * @param {any} expected - the expected value
 * */
export function test({ given, should, actual, expected }) {
  console.group(given);
  console.log(should);
  if (actual === expected) {
    console.log(`✅ Passed`);
  } else {
    console.log(`❌ Failed: Expected: ${expected} but got ${actual}`);
  }
  console.groupEnd();
}
