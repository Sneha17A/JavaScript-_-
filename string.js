function string (a,b){
    let res = [];
    for(let i=0;i<a.length;i++){
        let count = 0;
        for(let j=0;j<b.length;j++){
            if(a[i]===b[j]){
                count += 1
            }
        }
        if(count == 0){
            res.push(a[i]);
        }
    }
    console.log(res.join(","));
}
let s1 = "program"
let s2 = "script"
string(s1,s2);