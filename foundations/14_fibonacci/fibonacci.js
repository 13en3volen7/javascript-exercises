const fibonacci = function(n) {
    n = +n;
    if (n < 0) {
        return "OOPS";
    }
    const fibo = [];
    fibo.push(0); fibo.push(1);
    for (let i = 2; i <= n; i++) {
        fibo.push(fibo[i - 1] + fibo[i - 2]);
    }
    return fibo[n];
};

// Do not edit below this line
module.exports = fibonacci;
