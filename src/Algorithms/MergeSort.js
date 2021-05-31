const NUM_OF_BARS = 10;
var res = [];
var board = [];
export default function mergeSort(_board) {
    res = [];
    board = _board.slice();
    mergeSortHelper(0,NUM_OF_BARS-1);
    print();
    return res;
}
function mergeSortHelper(l,r) {
   if(l >= r) return;
   const mid = Math.floor((l+r)/2);
   mergeSortHelper(l,mid);
   mergeSortHelper(mid+1,r);
   merge(l,mid,r);
}
function print() {
    var _res = [];
    for(let i=0;i<board.length;i++) {
        _res.push(board[i].height);
    }
    alert(_res);
}
function merge(l,mid,r) {
    var p1 = l;
    var p2 = mid+1;
    while(p1 <= mid && p2 <= r) {
      if(board[p1].height > board[p2].height) {
          res.push([p1,p2,true]);
          swap(p1,p2);
          p2++;
      }
      else {
          res.push([p1,p2]);
          p1++;
      }
    }
}
function swap(p1,p2) {
    let tmp = board[p1];
    board[p1] = board[p2];
    board[p2] = tmp;
}
