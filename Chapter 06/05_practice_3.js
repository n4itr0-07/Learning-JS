function printTable(n) {
    for(let i = 1; i <= 10; i++) {
        console.log(n * i);
    }
}
printTable(5);

function printSum(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
printSum(5);