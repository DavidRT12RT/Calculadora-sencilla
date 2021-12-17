function limpiar() {
    resultado.textContent="";
}
function eliminar(){
    resultado.textContent = resultado.textContent.substring(0,(resultado.textContent.length-1));
}
function resetear() {
   resultado.textContent="";
   operandoa=0;
   operandob=0;
   operacion="";
}
function resolver() {
    let res=0;
    switch(operacion){
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
  }
  resetear();
  resultado.textContent = res;
}
function appendText(number) {
    resultado.textContent+=number;
}

   let operandoa,operandob,operacion;
   const numberButtons = document.querySelectorAll('[data-number]');
   const operationButtons = document.querySelectorAll('[data-operation]');
   const equalsButton = document.querySelector('[data-equals]');
   const resetButton = document.querySelector('[data-reset]');
   const resultado = document.getElementById('resultado');
   const eliminarBoton = document.querySelector('[data-eliminar]');

   numberButtons.forEach(button=>{
       button.addEventListener('click',()=>{
           appendText(button.innerText);
       });
   });

   operationButtons.forEach(button=>{
       button.addEventListener('click',()=>{ 
           operandoa = resultado.textContent;
           operacion=button.innerText;
           limpiar();
       });
   });

   equalsButton.addEventListener('click',button=>{
       operandob=resultado.textContent;
        if(!resultado.textContent || resultado.textContent===0){
               return alert("Primero introduce un numero!");
           }
       resolver();
   });
   eliminarBoton.addEventListener('click',()=>{
       eliminar();
   });
   resetButton.addEventListener('click',()=>{
       resetear();
   })
//Eventos del teclado
  document.addEventListener('keydown', (event)=>{
       const patternForNumbers = /[0-9]/g;
       //const patternForOperators = /[+\-*]/g;
       const patternForOperators=["+","-","*","/"];
       if(event.key.match(patternForNumbers)){
           event.preventDefault();
           appendText(event.key);
       }
       if(event.key==='.'){
           event.preventDefault();
           appendText(event.key);
       }
       if(patternForOperators.includes(event.key)){
           event.preventDefault();
           operandoa =resultado.textContent;
           operacion=event.key;
           limpiar();
       }
       if(event.key==='Enter' || event.key==='='){
           event.preventDefault();
           if(!resultado.textContent || resultado.textContent===0){
               return alert("Primero introduce un numero!");
           }
           operandob=resultado.textContent;
           resolver();
       }
       if(event.key==="Backspace"){
           event.preventDefault();
           eliminar();
       }
   });
