const SHRINK_FACTOR = 1.3;
export default function combSort(arr) {
    const animations = [];
    var gap = arr.length;
    var needToSwap = true;
    while(needToSwap) {
        needToSwap = false;
        gap = Math.max(1,Math.floor(gap/SHRINK_FACTOR));
        for(let i=0;i+gap<arr.length;i++) {
            let height1 = arr[i].height;
            let height2 = arr[i+gap].height;
            animations.push(["visit",i,i+gap]);
            if(height1 > height2) {
                 needToSwap = true;
                 swap(i,i+gap,arr);
                 animations.push(["swap",i,i+gap]);
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