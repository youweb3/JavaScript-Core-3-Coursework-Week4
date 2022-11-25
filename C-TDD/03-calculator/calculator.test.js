let add = require("./calculator"); 

test ("add",function () {
let numberString = "3,6,10";
let outPut = add(numberString)
let expected = "19"
expect(outPut).toEqual(expected);
})