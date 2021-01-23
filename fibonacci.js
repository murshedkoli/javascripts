

function fibonacci(n){
    var fibon = [0,1];
    
for (var i = 10; i<= fibon[1]; i--){
    
    fibon[i] = fibon [i-1] + fibon[i-2];
    
 }

 return fibon;
}

var result = fibonacci(10);

console.log(result);