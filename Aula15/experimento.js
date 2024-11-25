let num = [5, 8, 2, 9, 3]
num.push(1)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
 
for(let pos=0; pos<num.length; pos++)
console.log(num[pos])
let n = 3
let pos = num.indexOf(n)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor ${n} está na posição ${pos}`)
}
