## Project Title: AD 311 Tech Interview Prep: Merging Customer Data for Market Analysis
#### By: Amde Wubshet

### FAQ: 
- Time Complexity: O(n) (Linear Time). 
- Space Complexity: O(1) (Constant Space). 
- #### How does the function work? 
    - The function mergeCustData() accepts four parameters: Two sorted integer arrays "customerData1" and "customerData2", and two integers "m" and "n". 
        - The function first checks if the n variable associated with customerData2 is not equal to 0. This essentially checks if the customerData2 array is empty. 
            - If it isn't, then the block of code performs operations to merge and sort the customerData1 array without any zeros and in non-decreasing order
            - If it is, then the if statement block of code is skipped entirely
        - The customerData1 array is then checked for its elements in a for loop, that returns a error message if the array contains negative integers.   
    - The function returns a merged array, sorted in non-decreasing order, stored in customerData1.        

### Test Cases: 
- customerData1 = [101,104,107,0,0,0], m = 3, customerData2 = [102,105,108], n = 3
    -  Expected Output: [ 101, 102, 104, 105, 107, 108 ]

- customerData3 = [103], m = 1, customerData4 = [], n = 0
    - Expected Output: [ 103 ]

- customerData5 = [103, 116, 132, 70, 0, 0], m = 4, customerData6 = [123, 94], n = 2
    - Expected Output: [ 70, 94, 103, 116, 123, 132 ]

### Edge Cases: 
- customerData7 = [], m = 0, customerData8 = [], n = 0
    - Expected Output: []

- customerData9 = [-301], m = 1, customerData10 = [], n = 0 
    - Expected Output: Error 

- customerData11 = 103, m = 1, customerData12 = 123, n = 1
    - Expected Output: Error

### Flowchart
![alt text](https://github.com/amdemw206-coder/Tech-Interview-Prep--Merging-Customer-Data-for-Market-Analysis/blob/main/Flowchart/AD311_TIP2_final.drawio.png)
