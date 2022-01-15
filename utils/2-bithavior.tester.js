/**
 * Bithavior = Bit behavior
 *
 * Tiny utils to make easy document tests
 * Follows the Given - When - Then pattern
 * Taken from B.D.D.
 */


/**
 * A function that arranges the scenario
 * params:
 * @param {string} given - a description of the given scenario
 * @param {function} scenario - the function with the preparing testing code
 * */
export const given = function test(given, scenario) {
  console.group(`GIVEN: ${given}`);
  try {
    scenario();
  } catch (e) {
    console.log(`❌ FAILED: ${e.message}`);
  }
  console.groupEnd();
};

/**
 * A function that acts on the scenario
 * params:
 * @param {string} when - a description of the when action
 * @param {function} action - the function with the actual testing code
 * */
export const when = function test(when, action) {
  console.group(`WHEN: ${when}`);
  try {
    action();
  } catch (e) {
    console.log(`❌ FAILED: ${e.message}`);
  }
  console.groupEnd();
};

/**
 * A function that asserts on the scenario
 * params:
 * @param {string} should - a description of the expected behavior
 * @param {any} actual - the real value obtained from the scenario
 * @param {any} expected - the expected value
 * */
export const then = function expect(should, actual, expected) {
  if (actual === expected) {
    console.log(`THEN : ${should} ✅`);
  } else {
    console.log(
      `THEN : ${should} ❌
      - Expected: ${expected} but got ${actual}`
    );
  }
};
