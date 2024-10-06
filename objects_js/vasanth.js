function transformEmployeeData(arr) {
  let transformEmployeeList = arr.map(employee => {
    let employeeObj = {};
    employee.forEach(([key, value]) => {
      employeeObj[key] = value;
    });
    return employeeObj;
  });
  return transformEmployeeList;
}
let arr = [
  [["firstName","Vasanth"],["lastName","Raja"],["age", 24],["role", "JSWizard"]],
  [["firstName", "Sri"],["lastName", "Devi"],["age", 28],["role", "Coder"]]
];

console.log(transformEmployeeData(arr));
