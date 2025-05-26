// 1) Par de valores: 0 e false
console.log(0 == false); // true - o operador == converte tipos, então 0 é considerado false
console.log(0 === false); // false - tipos diferentes (number vs boolean)

// 2) Par de valores: "" (string vazia) e 0
console.log("" == 0); // true - string vazia é convertida para 0 em comparação numérica
console.log("" === 0); // false - tipos diferentes (string vs number)

// 3) Par de valores: null e undefined
console.log(null == undefined); // true - são considerados iguais no operador ==
console.log(null === undefined); // false - são tipos diferentes

// 4) Par de valores: "5" e 5
console.log("5" == 5); // true - a string é convertida para número
console.log("5" === 5); // false - tipos diferentes (string vs number)

// 5) Par de valores: [] (array vazio) e "" (string vazia)
console.log([] == ""); // true - array vazio é convertido para string vazia
console.log([] === ""); // false - tipos diferentes (object vs string)