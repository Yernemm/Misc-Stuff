const value = 'pscoyswfdfdvotxxhitefnkzsusjpowubzyhbrsfjxhioowymtxasdsuwiaqqkjrdxnplkviijdpyfstqysvrgnse';
const initialOffset = 940;
const inito = {ma: 1, mb: 5, sa: 4, sb: 0}
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

// ma mb sa sb sa ma sb mb mb mb ma sa sb
//on your way across the sea if youre lost but can see the north star you shall find will guide you from your bind

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Search term: ', (answer) => {
    run(answer);
  rl.close();
});



function run(searchTerm){
    for(let i = 0; i < 3600; i++){
        let t = sToVars(i)
        let res = offset(value, t.ma, t.mb, t.sa, t.sb);
        if(res.includes(searchTerm))
        console.log(res);
    }
}

function offset(input, ma, mb, sa, sb){
    ma -= inito.ma
    mb -= inito.mb
    sa -= inito.sa
    sb -= inito.sb
    let inparr = input.split('');
    let offsets = [ma, mb, sa, sb, sa, ma, sb, mb, mb, mb, ma, sa, sb];
    let i = 0;
    let newStr = '';
    inparr.forEach(c => {
        let val = alphabet.indexOf(c);
        val += offsets[(offsets.length + i) % offsets.length];
        val = (alphabet.length + val) % alphabet.length;
        newStr += alphabet[val];
        i++;
    });
    return newStr;
}

function sToVars(time){
    let mins = Math.floor(time / 60);
    let secs = time % 60;

    mins += ""
    secs += ""

    if(mins.length == 1) mins = "0" + mins;
    if(secs.length == 1) secs = "0" + secs;

    secs = secs.split('')
    mins = mins.split('')

    return {
        sa: secs[0] * 1,
        sb: secs[1] * 1,
        ma: mins[0] * 1,
        mb: mins[1] * 1
    }
}
