var input = "122 126 129 128 131 133 114 127 133 107 81 101 100 103 98 95 102"
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
