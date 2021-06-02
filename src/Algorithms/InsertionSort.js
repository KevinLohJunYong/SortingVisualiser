var animations = [];
export default function insertionSort(arr) {
    animations = [];
    for(let i=1;i<arr.length;i++) {
        var currIdx = i;
        for(let j=i-1;j >= 0 && currIdx >= 0;j--) {
            animations.push(["visit",currIdx,j]);
           var curr = arr[currIdx].height;
           var prev = arr[j].height;
           if(curr < prev) {
              swap(currIdx,j,arr);
              animations.push(["swap",currIdx,j]);
              currIdx--;
           }
           else {
               break;
           }
        }  
    }
    return animations;
}
function swap(x,y,arr) {
    let tmp = arr[x];
    arr[x] = arr[y];
    arr[y] = tmp;
 }