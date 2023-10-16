class Solution:
    def getRow(self, rowIndex: int) -> List[int]:
        if rowIndex==0:
            return [1]
        
        triangle=[[1]]

        for i in range(rowIndex):
            last_row=triangle[-1]
            new_row=[1]

            for j in range(1,len(last_row)):
                new_row.append(last_row[j-1]+last_row[j])
            
            new_row.append(1)
            triangle.append(new_row)
        
        return triangle[-1]