var input = ""
var alpha = "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var alphaWithoutGB = " acdefhijklmnopqrstuvwxyzACDEFHIJKLMNOPQRSTUVWXYZ"
var ascii = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
var inputArray = input.split(' ')
var shift = 0;
var output = "";
var sum = 0

for(i = 0;i<ascii.length;i++){
	output = "";
inputArray.forEach(a =>{
	//console.log(a)
	a = (a - 81) % ascii.length
	if(ascii[a] != undefined)
	output += ascii[a]
sum += a
})

console.log(output)
}
console.log(sum)
