var animations = [];
export default function selectionSort(arr) {
   animations = [];
   for(let i=0;i<arr.length;i++) {
       var smallestIdx = i;
       var smallest = arr[i].height;
       animations.push(["pivot",i]);
       for(let j=i+1;j<arr.length;j++) {
           animations.push(["visit",j]);
          var nxt = arr[j].height;
          if(nxt < smallest) {
              let tmpSmallestIdx = smallestIdx;
              smallestIdx = j;
              smallest = nxt;
              animations.push(["smallest",j,tmpSmallestIdx]);
          }
       }
       swap(smallestIdx,i,arr);
       animations.push(["swap",smallestIdx,i]);
       animations.push(["sorted",i]);
   }
   return animations;
}
function swap(x,y,arr) {
    let tmp = arr[x];
    arr[x] = arr[y];
    arr[y] = tmp;
}