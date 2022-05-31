
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
  if (value) {
    form.displayResult.value=eval(value);
  }
  
 }