// mergeSort.js
const arr1 = [3, 2, 1, 13, 8, 5, 0, 1];
const arr2 = [105, 79, 100, 110];

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        // Find the middle of the array
        const mid = Math.floor(arr.length / 2);
        // Split left and right from middle
        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid));
        // Define the index i (left) & j (right)
        let i = 0;
        let j = 0;
        // Create new empty array
        let newArr = [];
        // Combine sorted halves into newArr
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                newArr.push(left[i]);
                i++;
            } else {
                newArr.push(right[j]);
                j++;
            }
        }
        // If left has leftover elements add to newArr
        while (i < left.length) {
            newArr.push(left[i]);
            i++;
        }
        // If right has leftover elements add to newArr
        while (j < right.length) {
            newArr.push(right[j]);
            j++;
        }

        return newArr;
    }
}
console.log(mergeSort(arr1));
console.log(mergeSort(arr2));