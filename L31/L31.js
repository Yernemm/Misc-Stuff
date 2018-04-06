var encoded="ENTER ENCODED MESSAGE HERE";
var encHodor=encoded.split("-");
encHodor.forEach(a=>{
    var lett = "h";
    var indices = [0];
    var letts = a.split('');
    for(i=0;i<a.length;i++){
        if(letts[i]!=lett){
            lett=letts[i];
            indices.push(i);
        }
    }
    var val = 0;
    for(i=0;i<5;i++){
        val += (a.substring(indices[i],indices[i+1]).length - 1) * (i + 1);
    }

    console.log(giveAlpha(val));
});


function giveAlpha(num){
var alpha = "abcdefghijklmnopqrstuvwxyz".split('');
var lets = "";
for(i = 0;i<alpha.length;i++){
    var j = i;
    if((i+2)%2>0)
        j+=7;
    if(j==num)
        lets+= alpha[i];
}
return lets;
}