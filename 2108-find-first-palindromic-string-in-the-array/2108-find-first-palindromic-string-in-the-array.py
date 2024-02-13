class Solution:
    def firstPalindrome(self, words: List[str]) -> str:
        for word in words:
            isPalindromic = True
            n = len(word)

            for j in range(n // 2):
                if word[j] != word[n - j - 1]:
                    isPalindromic = False
                    break
  
            if isPalindromic: return word
        
        return ""