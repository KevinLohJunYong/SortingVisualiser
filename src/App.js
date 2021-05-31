import './App.css';
import React, {Component} from 'react';
import Bar from './Bar/Bar.jsx';
import Button from '@material-ui/core/Button';
import mergeSort from './Algorithms/MergeSort.js'

const MIN = 5;
const MAX = 500;
const numOfBars = 10;
const DEFAULT_COLOR = "turquoise";
const SORTING_COLOR = "red";
var TIMEOUT = 100;

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
      if(visited[i].length === 2) {
        this.markComparing(visited[i][0],visited[i][1]);
        this.markReturnToDefault(visited[i][0],visited[i][1]);
      }
      else {
        this.markComparing(visited[i][0],visited[i][1]);
        this.markSwapping(visited[i][0],visited[i][1]);
        this.markReturnToDefault(visited[i][0],visited[i][1]);
      }
    }
  }
  markReturnToDefault(x,y) {
    setTimeout(()=> {
      document.getElementById(x).style.backgroundColor = DEFAULT_COLOR;
      document.getElementById(y).style.backgroundColor = DEFAULT_COLOR;
    },TIMEOUT);
    TIMEOUT += 100;
  }
  markComparing(x,y) {
   setTimeout(()=> {
     document.getElementById(x).style.backgroundColor = SORTING_COLOR;
     document.getElementById(y).style.backgroundColor = SORTING_COLOR;
   },TIMEOUT);
   TIMEOUT += 100;
  }
  markSwapping(x,y) {
    setTimeout(()=> {
      let tmp = document.getElementById(x).style.height;
      document.getElementById(x).style.height = document.getElementById(y).style.height;
      document.getElementById(y).style.height = tmp;
    },TIMEOUT);
    TIMEOUT += 100;
  }
   render() {
     return (
         <div style={{textAlign:"center"}}>
           <div>
           <Button onClick={()=>this.visualiseMergeSort()}> Merge Sort </Button>
           </div>
            {this.renderArray()}
         </div>
     );
   }
}
