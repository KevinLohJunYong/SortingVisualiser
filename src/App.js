import './App.css';
import React, {Component} from 'react';
import Bar from './Bar/Bar.jsx';
import Button from '@material-ui/core/Button';
import mergeSort from './Algorithms/MergeSort.js'

const MIN = 5;
const MAX = 500;
const numOfBars = 40;
const DEFAULT_COLOR = "turquoise";
const SORTING_COLOR = "red";
var TIMEOUT = 20;
var TIME_OUT_INTERVAL = 20;

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
    TIMEOUT = 100;
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
   render() {
     return (
         <div style={{textAlign:"center"}}>
           <div>
           <Button onClick={()=>this.visualiseMergeSort()}> Merge Sort </Button>
           <Button onClick={()=>this.randomlyGenerateArray()}> Randomly Generate Array </Button>
           </div>
            {this.renderArray()}
         </div>
     );
   }
}
