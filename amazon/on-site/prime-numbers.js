function isPrime(num, lastPrime) {
    let counter = 2;
    if (lastPrime > 2) {
        counter = lastPrime
    }
    while (counter < num) {
        if (num % counter === 0) {
            return false
        }
        counter = counter + 1
    }
    return true
}

function sumOfallNumners(n) {
    const derp = n * (n + 1)
    return derp / 2
}

function solve(primeLimit) {

    const prime = Array(primeLimit + 1).fill(true)
    for (let p = 2; (p * p) <= primeLimit; p++) {
        if (prime[p] === true) {

            for (let i = (p * 2); i <= primeLimit; i += p) {
                prime[i] = false
            }
        }
    }
    let sum = 0
    prime.forEach((p, index) => {
        if ((p)) {
            sum = sum + index
        }
    })
    console.log(sum)
}

solve(8)
