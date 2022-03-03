
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

        const size_t sizePattern = pattern.length();
        int indexPattern = 0;

        for (const auto& character : input) {
            if (indexPattern < sizePattern && pattern[indexPattern] == character) {
                if (++indexPattern == sizePattern) {
                    return true;
                }
            }
        }
        return false;
    }
};
