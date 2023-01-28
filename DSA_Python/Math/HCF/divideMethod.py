
def divideMethod (nums):
    hcf  = hcfOfTwoNums(nums[0], nums[1])
    limit = 0
   
    for i in nums :
        if limit>1 :
            hcf = hcfOfTwoNums(i, hcf)
        limit+=1
    return hcf

def hcfOfTwoNums (n1,n2) :
    while n1>0 and n2>0 :
        if n1>n2 :
            n1 = n1 % n2 
        else :
            n2 = n2 % n1
    return n1 or n2      


print(divideMethod([84,90]))