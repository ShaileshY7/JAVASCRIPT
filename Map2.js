const  myNum=[1,2,3,4,5,6,7,8,9,10]
//IT IS ALSO RETURN A VALUE 
//const val=myNum.map((num)=>{ return num+10})
//METHOD CHANING

const val=myNum
          .map((num)=>num*10)
          .map((num)=>num+1)
          .filter((num)=>num>=60)
console.log(val)