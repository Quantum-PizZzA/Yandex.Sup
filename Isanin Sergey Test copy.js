const MASS =
   '12312317895234\n' +
   '42384123434234\n' +
   '15231971345237\n' +
   '62312313452388\n' +
   '15231971345237\n' +
   '62312313452388\n' +
   ' \n' +
   '19783141345235\n'
   

   const NUMBER = ['0','1','2','3','4','5','6','7','8','9']  

   const matrix = MASS.split("\n")

   var sum=0;

   for (let i = 0; i < matrix.length && matrix[i]!="NaN" ; i++) {
      sum = sum + Number(matrix[i])
      console.log(i,") ",sum); 
      }

   // console.log(matrix); 
   console.log("sum = ",sum); 