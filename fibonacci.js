// Fibonacci.js

// Iteration
function fibs(n) {

    const sequence = [0, 1];
    if (n <= 2) {
        console.log("Invalid number.");
        return;
    }

    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }

    return sequence;
}
console.log(fibs(8));

// Recursion
function fibsRec(n, arr = [0, 1], index = 2) {
    if (index < n) {
        arr.push(arr[index - 1] + arr[index - 2]);
        return fibsRec(n, arr, index + 1);
        // Initial: [0, 1]
        // Recursions:
        // 1st (index = 2): 1 + 0 = 1 // [0, 1, 1]
        // 2nd (index = 3): 1 + 1 = 2 // [0, 1, 1, 2]
        // 3rd (index = 4): 2 + 1 = 3 // [0, 1, 1, 2, 3]
        // 4th (index = 5): 3 + 2 = 5 // [0, 1, 1, 2, 3, 5]
        // 5th (index = 6): 5 + 3 = 8 // [0, 1, 1, 2, 3, 5, 8]
        // 6th (index = 7): 8 + 5 = 13 // [0, 1, 1, 2, 3, 5, 8, 13]
        // 7th (index = 8): 13 + 8 = 21 // [0, 1, 1, 2, 3, 5, 8, 13, 21]
    }
    return arr.slice(0, n);
    // [0, 1, 1, 2, 3, 5, 8, 13]
}

console.log(fibsRec(8));