
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
    const sizePattern = pattern.length;
    let indexPattern = 0;

    for (let character of input) {
        if (indexPattern < sizePattern && pattern.charAt(indexPattern) === character) {
            if (++indexPattern === sizePattern) {
                return true;
            }
        }
    }
    return false;
};
