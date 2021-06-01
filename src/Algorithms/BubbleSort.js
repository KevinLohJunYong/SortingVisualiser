var animations = [];
export default function bubbleSort(arr) {
    animations = [];
    var needToSwap = true;
    var sorted = -1;
    while(needToSwap) {
        needToSwap = false;
        sorted++;
        for(let i=0;i<arr.length-sorted-1;i++) {
           animations.push(["visit",i,i+1]);
           if(arr[i].height > arr[i+1].height) {
               needToSwap = true;
               swap(i,i+1,arr);
           }
        }
        animations.push(["sorted",arr.length-1-sorted]);
    }
    return animations;
}
function swap(x,y,arr) {
    let tmp = arr[x];
    arr[x] = arr[y];
    arr[y] = tmp;
    animations.push(["swap",x,y]);
}