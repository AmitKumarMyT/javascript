const array = [10, 5 , 80, 20, 90, 50, 60, 30, 40, 70];
let biggest = 0;
for(let i=0; i<array.length; i++){
    if(biggest> array[i]){
        biggest = array[i];
    }
}
console.log(biggest);