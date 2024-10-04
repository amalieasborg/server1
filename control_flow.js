//Simpel if-else struktur
const number=10;
if (number>5){
    console.log('Tallet er større end 5');
} else{
    console.log('Tallet er 5 eller mindre');
}
//For-løkke, der itererer fra 0 til 4
for (let i = 0; i<number;i++){
    console.log(`For-løkke iteration: ${i}`)
}

//While-løkke, der itererer så længe betingelsen er sand
let count=0;
while (count<5){
    console.log(`While-løkke tæller: ${count}`)
    count++;
}