// Test Cases 
const customerData1 = [101,104,107,0,0,0] //m = 3 
const customerData2 = [102,105,108] //n = 3

const customerData3 = [103] // m = 1 
const customerData4 = [] // n = 0

const customerData5 = [103, 116, 132, 70, 0, 0] // m = 4
const customerData6 = [123, 94] // n = 2

// Edge Cases 
const customerData7 = [] //m = 0 
const customerData8 = [] //n = 0

const customerData9 = [-301] // m = 1 
const customerData10 = [] // n = 0

const customerData11 = 103 // m = 1
const customerData12 = 123 // n = 1

function mergeCustData(customerData1, customerData2, m, n){
    if(n !== 0){
        customerData1.length = m 
        customerData1.push(...customerData2)
        customerData1.sort((a,b) => a - b)
    } 
    for(data of customerData1){
        if (data < 0){
            return new Error("Element in merge array is invalid (negative integer)")
        }
    }
    return customerData1
}

console.log(mergeCustData(customerData11, customerData12, m, n))