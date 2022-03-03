
/**
 * @param {string} pattern
 * @param {string} input
 * @return {boolean}
 */
var isSubsequence = function (pattern, input) {
    if (pattern.length === 0) {
        return true;
    }
    if (pattern.length > input.length) {
        return false;
    }

    const characterToIndex = new Map();
    initializeMapCharacterToIndex(input, characterToIndex);
    let previousIndex = -1;

    for (let ch of pattern) {
        if (!characterToIndex.has(ch)) {
            return false;
        }
        previousIndex = binarySearchForValidNextIndex(characterToIndex.get(ch), previousIndex);
        if (previousIndex === -1) {
            return false;
        }
    }
    return true;
};

/**
 * @param {string} input
 * @param {Map(key: string, value: number)} characterToIndex
 */
function initializeMapCharacterToIndex(input, characterToIndex) {
    const size = input.length;
    for (let i = 0; i < size; i++) {
        if (!characterToIndex.has(input.charAt(i))) {
            characterToIndex.set(input.charAt(i), []);
        }
        characterToIndex.get(input.charAt(i)).push(i);
    }
}

/**
 * @param {number[]} indexes
 * @param {number} previousIndex
 * @return {number}
 */
function binarySearchForValidNextIndex(indexes, previousIndex) {
    let left = 0;
    let right = indexes.length - 1;
    let nextIndex = -1;

    while (left <= right) {
        let middle = left + Math.floor((right - left) / 2);
        if (indexes[middle] > previousIndex) {
            nextIndex = indexes[middle];
        }

        if (previousIndex >= indexes[middle]) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return nextIndex;
}
