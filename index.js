let table = [];
const tableOf = (a,b) => {
    for (let i = 0; i <= b; i++){
        table[i] = a*i;
        console.log(`${a} X ${i} = ${table[i]}`);
    }
    
}

// console.log(tableOf(77,14));

module.exports = tableOf;
