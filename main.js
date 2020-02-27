function isPrime(num) {
    if (num <= 1) {
        return false;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
    }
    return true;
}
let arrayPrime = [];
for (let i = 0; i < 10000; i++){
    if (isPrime(i)){
        arrayPrime.push(i);
    }
}

document.getElementById("prime").innerHTML = "Cac so nguyen to nho hon 10000: " + arrayPrime.join("\n");