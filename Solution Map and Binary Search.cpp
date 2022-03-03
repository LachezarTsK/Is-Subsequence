
#include <unordered_map>
#include <vector>
using namespace std;

class Solution {
  
public:

    bool isSubsequence(string pattern, string input) {
        if (pattern.length() == 0) {
            return true;
        }
        if (pattern.length() > input.length()) {
            return false;
        }
        unordered_map<char, vector<int>> characterToIndex;
        initializeMapCharacterToIndex(input, characterToIndex);
        int previousIndex = -1;

        for (const auto& character : pattern) {

            if (characterToIndex.find(character) == characterToIndex.end()) {
                return false;
            }
            previousIndex = binarySearchForValidNextIndex(characterToIndex[character], previousIndex);
            if (previousIndex == -1) {
                return false;
            }
        }

        return true;
    }

    void initializeMapCharacterToIndex(string input, unordered_map<char, vector<int>>&characterToIndex) {
        const size_t size = input.length();
        for (int i = 0; i < size; i++) {
            if (characterToIndex.find(input[i]) == characterToIndex.end()) {
                characterToIndex[input[i]] = vector<int>();
            }
            characterToIndex[input[i]].push_back(i);
        }
    }

    int binarySearchForValidNextIndex(const vector<int>& indexes, int previousIndex) {
        int left = 0;
        int right = indexes.size() - 1;
        int nextIndex = -1;

        while (left <= right) {
            int middle = left + (right - left) / 2;
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
};
