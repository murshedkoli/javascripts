function prime(n){
    for (i = 2; i < n; i++){
        var result = n % i;

        if (result == 0){
            return "this is not a prime number";
        }
        else {
            return "This is a pirme Number";
        }
    }
}

var primecheck = prime(17);

console.log(primecheck);