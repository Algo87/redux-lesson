function* generationFunction (){
  for (let i =0; i<5; i++){
    yield i
  }
}
const iter = generationFunction()

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
