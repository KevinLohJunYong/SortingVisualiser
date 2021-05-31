const NUM_OF_BARS = 40;
var res = [];
var board = [];
export default function mergeSort(_board) {
    res = [];
    board = _board.slice();
    mergeSortHelper(0,NUM_OF_BARS-1);
    return res;
}
function mergeSortHelper(l,r) {
   if(l >= r) return;
   const mid = Math.floor((l+r)/2);
   mergeSortHelper(l,mid);
   mergeSortHelper(mid+1,r);
   merge(l,mid,r);
}
function merge(l,mid,r) {
   const newArray = [];
   let p1 = l;
   let p2 = mid+1;
   let k = 0;
   while(p1 <= mid && p2 <= r) {
       if(board[p1].height > board[p2].height) {
          newArray.push(board[p2].height);
          res.push([p1,p2,l+k,board[p2].height]);
          p2++;
       }
       else {
          newArray.push(board[p1].height);
          res.push([p1,p2,l+k,board[p1].height]);
          p1++;
       }
       k++;
   }
   for(;p1 <= mid;p1++,k++) {
       res.push([p1,p1,l+k,board[p1].height]);
       newArray.push(board[p1].height);
   }
   for(;p2 <= r;p2++,k++) {
     res.push([p2,p2,l+k,board[p2].height]);
     newArray.push(board[p2].height);
   }
   for(let i=l;i<=r;i++) {
       board[i].height = newArray[i-l];
   }
}

