import './App.css';
import { withStyles } from "@material-ui/core/styles";
import './index.css';
import React from 'react';
import Bar from './Bar/Bar.jsx';
import Button from '@material-ui/core/Button';
import mergeSort from './Algorithms/MergeSort.js';
import quickSort from './Algorithms/QuickSort.js';
import bubbleSort from './Algorithms/BubbleSort.js';
import insertionSort from './Algorithms/InsertionSort.js';
import selectionSort from './Algorithms/SelectionSort.js';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const MIN = 5;
const MAX = 500;
const numOfBars = window.screen.availWidth < 700 ? 20 : 40;
const DEFAULT_COLOR = "turquoise";
const SORTING_COLOR = "red";
var TIMEOUT = 0;
var TIME_OUT_INTERVAL = 50;

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF"
  }
})(Typography);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    }
    this.init();
  }
  init() {
    for(let i=0;i<numOfBars;i++) {
      this.state.array.push(this.createBar(this.genRandomNo(),i));
    }
    if(window.screen.availWidth < 500) {
      alert('Hi there, your screen size is a bit small. U can rotate your phone horizontally or better still use a laptop for a better consumer experience! :)')
    }
  }
  createBar(val,idx) {
    const bar = {
        height: val,
        index: idx,
        isBeingSorted: false
    };
    return bar;
  } 
  genRandomNo() {
     return MIN + Math.random() * (MAX-MIN+1);
  }
  renderArray() {
    return this.state.array.map((bar) => {
      const {height,index} = bar;
        return (
          <Bar
          id={index}
          height={height}
          index={index}>
          </Bar>
        );
    })
  }
  visualiseMergeSort() {
    const visited = mergeSort(this.state.array.slice());
    TIMEOUT = 0;
    TIME_OUT_INTERVAL = 30;
    for(let i=0;i<visited.length;i++) {
        this.markComparing(visited[i][0],visited[i][1]);
        this.markSwapping(visited[i][2],visited[i][3]);
        this.markReturnToDefault(visited[i][0],visited[i][1]);
    }
  }
  markReturnToDefault(x,y) {
    setTimeout(()=> {
      document.getElementById(x).style.backgroundColor = DEFAULT_COLOR;
      document.getElementById(y).style.backgroundColor = DEFAULT_COLOR;
    },TIMEOUT);
    TIMEOUT += TIME_OUT_INTERVAL;
  }
  markComparing(x,y) {
   setTimeout(()=> {
     document.getElementById(x).style.backgroundColor = SORTING_COLOR;
     document.getElementById(y).style.backgroundColor = SORTING_COLOR;
   },TIMEOUT);
   TIMEOUT += TIME_OUT_INTERVAL;
  }
  markSwapping(x,y) {
    setTimeout(()=> {
      document.getElementById(x).style.height = `${y}px`;
    },TIMEOUT);
    TIMEOUT += TIME_OUT_INTERVAL;
  }
  randomlyGenerateArray() {
    window.location.reload();
  }
  markPivot(pivotIdx) {
    const SORTED_COLOR = "teal"
    for(let i=0;i<numOfBars;i++) {
      if(document.getElementById(i).style.backgroundColor === SORTED_COLOR) continue; 
      document.getElementById(i).style.backgroundColor = DEFAULT_COLOR;
    }
    const PIVOT_COLOR = "purple";
    setTimeout(()=> {
      document.getElementById(pivotIdx).style.backgroundColor = PIVOT_COLOR;
    },TIMEOUT);
    TIMEOUT += TIME_OUT_INTERVAL;
  }
  markNext(idx) {
    const COMPARING_COLOR = "orange";
    setTimeout(()=> {
      document.getElementById(idx).style.backgroundColor = COMPARING_COLOR;
    },TIMEOUT);
    TIMEOUT += TIME_OUT_INTERVAL;
    setTimeout(()=> {
      document.getElementById(idx).style.backgroundColor = DEFAULT_COLOR;
    },TIMEOUT);
  }
  markSwap(x,y) {
    const SWAPPING_COLOR = "red";
    setTimeout(()=> {
      document.getElementById(x).style.backgroundColor = SWAPPING_COLOR;
      document.getElementById(y).style.backgroundColor = SWAPPING_COLOR;
    },TIMEOUT);
    TIMEOUT += TIME_OUT_INTERVAL;
    setTimeout(()=> {
      let tmp = document.getElementById(x).style.height;
      document.getElementById(x).style.height =  document.getElementById(y).style.height;
      document.getElementById(y).style.height = tmp;
    },TIMEOUT);
    setTimeout(()=> {
      document.getElementById(x).style.backgroundColor = DEFAULT_COLOR;
      document.getElementById(y).style.backgroundColor = DEFAULT_COLOR;
    },TIMEOUT);
    TIMEOUT += TIME_OUT_INTERVAL;
  }
  markSorted(idx) {
     const SORTED_COLOR = "teal";
     setTimeout(()=> {
       document.getElementById(idx).style.backgroundColor = SORTED_COLOR;
    },TIMEOUT);
    TIMEOUT += TIME_OUT_INTERVAL;
    for(let i=0;i<numOfBars;i++) {
      if(document.getElementById(i).style.backgroundColor === SORTED_COLOR) continue;
      document.getElementById(i).style.backgroundColor = DEFAULT_COLOR;
    }
    TIMEOUT += TIME_OUT_INTERVAL;
  }
  visualiseQuickSort() {
    TIMEOUT = 0;
    TIME_OUT_INTERVAL = 40;
    const animations = quickSort(this.state.array.slice());
    for(let i=0;i<animations.length;i++) {
      const arr = animations[i];
      let operator = arr[0]; 
      if(operator === "pivot") {
         this.markPivot(arr[1]);
      }
      else if(operator === "next") {
         this.markNext(arr[1]);
      }
      else if(operator === "swap") {
          this.markSwap(arr[1],arr[2]);
      }
      else {
         this.markSorted(arr[1]);
      }
    }
  }
  markVisit(x,y) {
    setTimeout(()=>{
      document.getElementById(x).style.backgroundColor = "orange";
      document.getElementById(y).style.backgroundColor = "orange";
    },TIMEOUT);
    TIMEOUT += TIME_OUT_INTERVAL;
    setTimeout(()=>{
      document.getElementById(x).style.backgroundColor = DEFAULT_COLOR;
      document.getElementById(y).style.backgroundColor = DEFAULT_COLOR;
    },TIMEOUT);
  }
  markSwapBubbleSort(x,y) {
    setTimeout(()=>{
      document.getElementById(x).style.backgroundColor = "red";
      document.getElementById(y).style.backgroundColor = "red";
    },TIMEOUT);
    setTimeout(()=>{
      let tmp = document.getElementById(x).style.height;
      document.getElementById(x).style.height = document.getElementById(y).style.height;
      document.getElementById(y).style.height = tmp;
    },TIMEOUT);
    TIMEOUT += TIME_OUT_INTERVAL;
    setTimeout(()=>{
      document.getElementById(x).style.backgroundColor = DEFAULT_COLOR;
      document.getElementById(y).style.backgroundColor = DEFAULT_COLOR;
    },TIMEOUT);
  }
  visualiseBubbleSort() {
    TIMEOUT = 0;
    TIME_OUT_INTERVAL = 20;
    const animations = bubbleSort(this.state.array.slice());
    for(let i=0;i<animations.length;i++) {
      const arr = animations[i];
      const operator = arr[0];
      if(operator === "visit") {
        this.markVisit(arr[1],arr[2]);
      }
      else if(operator === "swap") {
        this.markSwapBubbleSort(arr[1],arr[2]);
      }
      else {
        this.markSorted(arr[1]);
      }
    }
  }
  visualiseInsertionSort() {
    const animations = insertionSort(this.state.array.slice());
    for(let i=0;i<animations.length;i++) {
      const arr = animations[i];
      const operator = arr[0];
      if(operator === "visit") {
        this.markVisit(arr[1],arr[2]);
      }
      else {
        this.markSwap(arr[1],arr[2]);
      }
    }
  }
  markSmallest(x,y) {
    setTimeout(() => {
       document.getElementById(x).style.backgroundColor = "blue";
       document.getElementById(y).style.backgroundColor = DEFAULT_COLOR;
    },TIMEOUT);
    TIMEOUT += TIME_OUT_INTERVAL;
  }
  visualiseSelectionSort() {
    const animations = selectionSort(this.state.array.slice());
    for(let i=0;i<animations.length;i++) {
      const arr = animations[i];
      const operator = arr[0];
      if(operator === "pivot") {
        this.markPivot(arr[1]);
      }
      else if(operator === "swap") {
        this.markSwap(arr[1],arr[2]);
      }
      else if(operator === "visit") {
        this.markVisit(arr[1],arr[1]);
      }
      else if(operator === "sorted") {
        this.markSorted(arr[1]);
      }
      else {
        this.markSmallest(arr[1],arr[2]);
      }
    }
  }
  animateButton(id) {
    document.getElementById(id).style.backgroundColor = "orange";
 }
 deAnimateButton(id) {
     document.getElementById(id).style.backgroundColor = "inherit";
  }
   render() {
     return (
       <div style={{textAlign:"center"}}>
      <AppBar position="static" elevation={0} style={{padding:"10px",paddingLeft:"5px"}}>
      <Toolbar>
        <Typography variant="h6" color="inherit">
            SortingVisualiser
        </Typography>
        <div class="dropdown">
          <Button 
            id="visualiseButton" 
            size="large"
            onMouseEnter={()=>this.animateButton("visualiseButton")} 
            onMouseLeave={()=>this.deAnimateButton("visualiseButton")}
            variant="outlined" 
            style={{textTransform:"none"}}> 
             <WhiteTextTypography variant="h6" color="#FFFFFF">
                Visualise Algorithms
             </WhiteTextTypography>
          </Button>
          <div class="dropdown-content">
           <Button 
                   id="bubbleSortButton"
                   size="large"
                   style={{backgroundColor:"white",textTransform:"none"}} 
                   onClick={()=>this.visualiseBubbleSort()}
                   onMouseEnter={()=>this.animateButton("bubbleSortButton")}
                   onMouseLeave={()=>this.deAnimateButton("bubbleSortButton")}> Bubble Sort </Button>
           <Button 
                   id="insertionSortButton"
                   style={{backgroundColor:"white",textTransform:"none"}}
                   onClick={()=>this.visualiseInsertionSort()}
                   onMouseEnter={()=>this.animateButton("insertionSortButton")}
                   onMouseLeave={()=>this.deAnimateButton("insertionSortButton")}> Insertion Sort </Button>
          <Button 
                  id="selectionSortButton"
                  size="large"
                  style={{backgroundColor:"white",textTransform:"none"}}
                  onClick={()=>this.visualiseSelectionSort()} 
                  onMouseEnter={()=>this.animateButton("selectionSortButton")}
                  onMouseLeave={()=>this.deAnimateButton("selectionSortButton")}> Selection Sort </Button>
        <Button 
                  id="mergeSortButton"
                  style={{backgroundColor:"white",textTransform:"none"}}
                  onClick={()=>this.visualiseMergeSort()}
                  onMouseEnter={()=>this.animateButton("mergeSortButton")}
                  onMouseLeave={()=>this.deAnimateButton("mergeSortButton")}> Merge Sort </Button>
           <Button 
                  id="quickSortButton"
                  size="large"
                  style={{backgroundColor:"white",textTransform:"none"}}
                  onClick={()=>this.visualiseQuickSort()} 
                  onMouseEnter={()=>this.animateButton("quickSortButton")}
                  onMouseLeave={()=>this.deAnimateButton("quickSortButton")}> Quick Sort </Button>
        </div>
          </div>
          <Button
              id="genArrayButton"
              size="large"
              style={{textTransform:"none"}}
              onClick={() => window.location.reload()}
              onMouseEnter={()=>this.animateButton("genArrayButton")}
              onMouseLeave={()=>this.deAnimateButton("genArrayButton")}>
             <WhiteTextTypography variant="h6" color="#FFFFFF">
                Generate A Random Array
             </WhiteTextTypography>
          </Button>
      </Toolbar>
    </AppBar>
           <div>
            {this.renderArray()}
            </div>
            </div>
     );
   }
}
