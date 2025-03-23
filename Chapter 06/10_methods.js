const calculator = {

    add: function(a, b) {
        return a + b;
    },
    sub: function(a, b) {
        return a - b;
    },
    mul: function(a, b) {
        return a * b;
    }

};

calculator.add(2, 3); // 5
calculator.sub(5, 2); // 3
calculator.mul(2, 3); // 6
// console.log(calculator.add(2, 3)); // 5



// shortned version
const calculator2 = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    },
    mul(a, b) {
        return a * b;
    }
};