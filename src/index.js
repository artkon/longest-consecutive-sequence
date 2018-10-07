module.exports = function longestConsecutiveLength(array) {
  if(array.length == 0) return 0;
  if(array.length == 1) return 1;

  array.sort((a, b) => a - b);
  maxSequenceCount = 1;
  let count = 1;

  for(let i = 0; i < array.length; i++){
  	if( array[i] == array[i + 1]) continue;
    if( (array[i] + 1) == array[i + 1] ){
      count++;
    } else {
      if(count > maxSequenceCount){
        maxSequenceCount = count;
      }
      count = 1;
    }
    
  }
  return maxSequenceCount;
}