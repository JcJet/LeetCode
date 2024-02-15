/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    bool hasCycle(ListNode *head) {
        ListNode *p1 ;
        ListNode *p2 ;
        for (p1 = head; p1 != NULL; p1 = p1->next)
            for (p2 = p1; p2!=NULL; p2 = p2->next)
            {
                if (p2->next == p1)
                    return true;
            }
        return false;
        
    }
};