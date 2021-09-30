var input = [
  [
    ["firstName", "Joe"],
    ["lastName", "Blow"],
    ["age", 42],
    ["role", "clerk"],
  ],
  [
    ["firstName", "Mary"],
    ["lastName", "Jenkins"],
    ["age", 36],
    ["role", "manager"],
  ],
];

var r = [
  { firstName: "Joe", lastName: "Blow", age: 42, role: "clerk" },
  { firstName: "Mary", lastName: "Jenkins", age: 36, role: "manager" },
];

function transformEmployeeData(employeeData) {
  // your code here
  let result = [];
  for (let i = 0; i < input.length; i++) {
    for(let j =0; j < input.length; j++)
    let obj = {};
    obj[employeeData[i][j][0]] = employeeData[i][j][1];
    result.push(obj);
  }

  return result;
}
console.log(transformEmployeeData(input));
