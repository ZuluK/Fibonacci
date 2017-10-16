//Fibonacci algorithm
//Fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34 ...
function fibonacci(position){
  if(position < 3) return 1;
  else return fibonacci(position - 1) + fibonacci(position -2);//O(n^2) complexity
}
//Memoized Fibonacci
function fibMemo(index,cache){
  //index: index of number in fibonacci sequence
  //cache: an array used as memory 
}
