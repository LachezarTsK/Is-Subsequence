
public class Solution {

    public boolean isSubsequence(String pattern, String input) {
        if (pattern.length() == 0) {
            return true;
        }
        if (pattern.length() > input.length()) {
            return false;
        }

        final int sizeInput = input.length();
        final int sizePattern = pattern.length();
        int indexPattern = 0;

        for (int i = 0; i < sizeInput; i++) {
            if (indexPattern < sizePattern && pattern.charAt(indexPattern) == input.charAt(i)) {
                if (++indexPattern == sizePattern) {
                    return true;
                }
            }
        }
        return false;
    }
}
