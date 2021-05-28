export default function mergeSort(animations,array) {
   
}
function mergeSortHelper(leftIdx,rightIdx,array,animations) {
    if(leftIdx === rightIdx) {
       return [array[leftIdx]];
    }
    var midIdx = (leftIdx + rightIdx)/2;
    const l = mergeSortHelper(leftIdx,midIdx,array);
    const r = mergeSortHelper(midIdx+1,rightIdx,array);
    merge(l,r,leftIdx,midIdx+1,animations);
}
function merge(leftSortedArray,rightSortedArray,leftStartIdx,rightStartIdx,animations) {
      var minLen = Math.min(leftSortedArray.length,rightSortedArray.length);
      for(let i=0;i<minLen;i++) {
          if(leftSortedArray[leftStartIdx] >= rightSortedArray[rightStartIdx]) {
              animations.push([rightSortedArray[rightStartIdx],leftSortedArray[leftStartIdx]]);
              
              animations.push([rightSortedArray[rightStartIdx],leftSortedArray[leftStartIdx]]);
          }
          else if(leftSortedArray[leftStartIdx] < rightSortedArray[rightStartIdx]) {
              
          }
          leftStartIdx++;
          rightStartIdx++;
      }
}
