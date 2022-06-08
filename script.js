
 function calcNumbers(result){
   console.log(result)
  form.displayResult.value=form.displayResult.value+result;
 
 }

 function deleteDigit(value){
  console.log(value)
  form.displayResult.value="";
 }

 function calcular(value){
   console.log(value)
   

   if (value.includes('%')) {
     console.log('si incluye')
     let arrayPercent = value.split('%')
     let percent = arrayPercent[0]
     let percentTotal = arrayPercent[1]

     console.log(arrayPercent)

     let result = (percentTotal / 100) * percent 
     console.log(result)
     form.displayResult.value = result
     return;
   }
  if (value) {
    form.displayResult.value=eval(value);
  }
  
 }