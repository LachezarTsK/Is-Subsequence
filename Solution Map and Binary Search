
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Solution {

    public boolean isSubsequence(String pattern, String input) {
        if (pattern.length() == 0) {
            return true;
        }
        if (pattern.length() > input.length()) {
            return false;
        }
        Map<Character, List<Integer>> characterToIndex = new HashMap<>();
        initializeMapCharacterToIndex(input, characterToIndex);
        final int sizePattern = pattern.length();
        int previousIndex = -1;

        for (int i = 0; i < sizePattern; i++) {
            char ch = pattern.charAt(i);
            if (!characterToIndex.containsKey(ch)) {
                return false;
            }
            previousIndex = binarySearchForValidNextIndex(characterToIndex.get(ch), previousIndex);
            if (previousIndex == -1) {
                return false;
            }
        }

        return true;
    }

    public void initializeMapCharacterToIndex(String input, Map<Character, List<Integer>> characterToIndex) {
        final int size = input.length();
        for (int i = 0; i < size; i++) {
            characterToIndex.computeIfAbsent(input.charAt(i), indexesInput -> new ArrayList<>()).add(i);
        }
    }

    public int binarySearchForValidNextIndex(List<Integer> indexes, int previousIndex) {
        int left = 0;
        int right = indexes.size() - 1;
        int nextIndex = -1;

        while (left <= right) {
            int middle = left + (right - left) / 2;
            if (indexes.get(middle) > previousIndex) {
                nextIndex = indexes.get(middle);
            }

            if (previousIndex >= indexes.get(middle)) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
        return nextIndex;
    }
}
