class Solution {
public:
    bool isMatch(const char *s, const char *p) {
        while (1) {
            // see if to jump out of the loop
            if ((*s == '\0')&&(*p == '\0')) return true;
            
            // non'*' situation
            if ('*' != *(p+1)) {
                if (!isMatchSingleChar(s, p)) return false;
				if ((*s == '\0')&&(*p == '\0')) return true;
                s++;
                p++;
                continue;
            } // below here, p will not be moved
            
            // '*' situation
            // 1. '*' means 0 char
            if (isMatch(s, p+2)) return true;
            
            // 2. '*' != 0
            if (*s == *p) {
                
                s++;
                continue;
            }
        }
    }
    
    bool isMatchSingleChar(const char *s, const char *p) {
		if (*s == *p) return true;
        if (('.' == *p)&&(*s != '\0')) return;
    }
};