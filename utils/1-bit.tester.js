/**
 * Bit tester
 *
 * Tiny utils to show haw testing frameworks work
 * Minimal implementation
 * Test and Expect
 */

/**
 * A function that runs the inputted test code
 * params:
 * @param {string} given - a description of the given scenario
 * @param {function} assert - the function  with the testing code
 * */
export function test(given, assert) {
  console.group(`GIVEN: ${given}`);
  try {
    assert();
  } catch (e) {
    console.log(`❌ FAILED: ${e.message}`);
  }
  console.groupEnd();
}

/**
 * A function that compares the actual value to the expected value
 * params:
 * @param {string} should - a description of the expected behavior
 * @param {any} actual - the real value obtained from the scenario
 * @param {any} expected - the expected value
 * */
export function expect(should, actual, expected) {
  console.log(`SHOULD: ${should}`);
  if (actual === expected) {
    console.log(`✅ Passed`);
  } else {
    console.log(`❌ FAILED: Expected: ${expected} but got ${actual}`);
  }
}
