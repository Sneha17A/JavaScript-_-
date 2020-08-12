let array = [1,2,3,4,5,6,7,8];
let a = [];
let b = [];
for(let i=0; i<array.length; i++){
    if(array[i]%2===0){
        a.push(array[i]);
    }
    else{
        b.push(array[i]);
    }
}
let x = (a.sort(function(a,b){
    return a-b;
}));
let y = (b.sort(
    function(a,b){
        return b-a;
    }
));
console.log(x+"\n"+y)