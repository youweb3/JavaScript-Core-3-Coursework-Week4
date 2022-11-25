function add(numbers) {
    if (numbers===""){
        return "0"
    }
    let sum = numbers.split(",").reduce((accumulator,value) => {
      return accumulator + Number(value);
    }, 0);
    return sum.toString()
    }
    // string to number ==> Number(str) / + before string / parsInt(str)
    // number to string ==> +"" / toString(num)
    module.exports= add;