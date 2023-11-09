const sieveOfEratosthenes = []
// check if a number is prime
function isPrime(num) {
    const primeCheck = []
    //push all factors to primeCheck
    for (j=1; j<=num; j++) {
        if (num % j == 0) {
            primeCheck.push(j)
        }
    }
    // if prime: primeCheck only has 2 values for 2 factors, hence prime
    if (primeCheck.length > 2) {
        return false
    } else {
        // add multiples of the prime number to the sieve of eratosthenes
        sieveOfEratosthenes.push(num*2,num*3,num*4,num*5,num*6,num*7,num*8,num*9,num*10,num*11,num*12,num*13,num*14,num*15,num*16,num*17,num*18,num*19,num*20,num*21,num*22,num*23,num*24,num*25,num*26,num*27,num*28,num*29,num*30,num*31,num*32,num*33,num*34,num*35,num*36,num*37,num*38,num*39,num*40,num*41,num*42,num*43,num*44,num*45,num*46,num*47,num*48,num*49)

        return true
    }    
}
function sumOfDivided(arr) {
    const outputAnswer = []
    const primeFactors = []
    let currentValue;
    let multiplesSum;

    for (i=0; i<arr.length; i++) {//for each value in 'arr'

        // treat negative entries as positive to find factors
        if (arr[i] < 0) {
            currentValue = arr[i] * -1;
        } else {
            currentValue = arr[i];
        }

        for (i2=2; i2<=currentValue; i2++) { // every number 2 - arr[i]
            //INCREASE EFFICIENCY - check if it's a factor first, then send it through isPrime() so that you're not running isPrime on numbers that aren't necessary
            if (currentValue % i2 === 0) {
                //INCREASE EFFICIENCY - don't need to check if prime, if the number is in the sieve OR if it has already been pushed to primeFactors
                if (primeFactors.includes(i2) == false || sieveOfEratosthenes.includes(i2)) {
                    console.log(i2)
                    if (isPrime(i2)) {//if 'currentValue' % i2 == 0 && i2 is prime number then i2 is a prime factor of currentValue
                        primeFactors.push(i2);
                    }
                }
            }
            
        }       
    }        

    // for each prime factor: sum it's multiples in arr
    for (i3=0; i3<primeFactors.length; i3++) {
        multiplesSum = 0
        for (i4=0; i4<arr.length; i4++) {
            if (arr[i4] % primeFactors[i3] == 0 ) {
                multiplesSum += arr[i4];
            }
        }
        //update outputAnswer
        outputAnswer.push([primeFactors[i3], multiplesSum])
    }
    // order outputAnswer
    return outputAnswer.sort(function(a, b){return a[0]-b[0]});   
}

// For VSCode Only to test. Don't paste into codewars
console.log( sumOfDivided([12,15,17,45,107]) )