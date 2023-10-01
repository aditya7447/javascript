function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let left = 0;
  const charSet = new Set();

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }

    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}


const inputString = "abcabcbb";
const longestLength = lengthOfLongestSubstring(inputString);
console.log(`Length of longest substring without repeating characters: ${longestLength}`);