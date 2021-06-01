var animations = [];
export default function quickSort(arr) {
    animations = [];
    quickSortHelper(arr,0,arr.length-1);
    return animations;
}
function quickSortHelper(arr, start, end) {
    if (start === end) {
        animations.push(["sorted",start]);
    }
    if(start >= end) return;
    let index = partition(arr, start, end);
    quickSortHelper(arr, start, index - 1);
    quickSortHelper(arr, index + 1, end);
    return animations;
}
function partition(arr, start, end){
    let pivotIdx = start;
    let storeIdx = pivotIdx + 1;
    animations.push(["pivot",pivotIdx]);
    for(let i = pivotIdx+1;i <= end;i++) {
        animations.push(["next",i]);
       if(arr[i].height < arr[pivotIdx].height) {
          swap(i,storeIdx,arr);
          storeIdx++;
       }     
    }
    swap(pivotIdx,storeIdx-1,arr);  
    animations.push(["sorted",storeIdx-1]);
    return storeIdx-1;
};
function swap(x,y,arr) {
    let tmp = arr[x];
    arr[x] = arr[y];
    arr[y] = tmp;
    animations.push(["swap",x,y]);
}