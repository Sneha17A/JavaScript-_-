let n = 15;
for(let i=0;i<=n;i++){
    if(i%3==0 && i%5!=0){
        console.log("Zizz");
    }
    else if(i%5==0 && i%3!=0){
        console.log("Buzz");
    }
    else if(i%3==0 && i%5==0){
        console.log("ZizzBuzz");
    }
    else{
        console.log(i);
    }
}