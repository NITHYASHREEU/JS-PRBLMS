function assertObjectsEqual(actual, expected, testName){
  const actualKeys = Object.keys(actual);
  const expectedKeys = Object.keys(expected);
  if (actualKeys.length !== expectedKeys.length) {
    console.log('{testName}-FAIL: Objects have different number of keys.');
    return;
  }
  for(let key of expectedKeys){
    if(actual[key]!==expected[key]){
      console.log('{testName}-FAIL: Objects differ at key "${key}".Expected "{expected[key]}",but got "${actual[key]}".');
    return;
    }
  }
    console.log('{testName} - PASS: Objects are equal.');
}
let expected={foo:5,bar:6};
let actual = {foo:5, bar:6};

assertObjectsEqual(actual,expected,"Test Case 1");

let differentActual = {foo:5, bar:7};
assertObjectsEqual(differentActual,expected,"TestCase 2");

