let numero = 526
let resultado = 0
let numerodeprimos = 1000


function esprimi(numero){
    for (let index = 1; index < numero; index++) {
   if ((numero % index)==0){
    resultado = index
   
   }else{
   
   }
   
}
    if (resultado==1 ){
    console.log("es primo" + numero) 
}

}

for (let index = 2; index < numerodeprimos; index++) {
    
    esprimi(index)
}
