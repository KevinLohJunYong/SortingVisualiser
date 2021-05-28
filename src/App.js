import './App.css';
import React, {Component} from 'react';
import Bar from './Bar/Bar.jsx';
import Button from '@material-ui/core/Button';
import mergeSort from './Algorithms/MergeSort.js'

const MIN = 5;
const MAX = 500;
const numOfBars = 100;
const DEFAULT_COLOR = 'cyan';
const SORTING_COLOR = 'red';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    }
    this.initArray();
  }
  initArray() {
    for(let i=0;i<numOfBars;i++) {
      this.state.array.push(this.genRandomNo());
    }
  }
  genRandomNo() {
     return MIN + Math.random() * (MAX-MIN+1);
  }
  renderArray() {
    return (
     this.state.array.map((num,idx)=>{
       return (
       <Bar
        value={num}
        index={idx}
       >
       </Bar>
       );
     })
    );
  }
  visualiseMergeSort() {
     const animations = [];
     mergeSort(animations,this.state.array.slice());
     for(let i=0;i<animations.length;i++) {
       const [x,y] = animations[i];
       var isComparingOrIsSorting = i % 3 === 0;
       if(isComparingOrIsSorting) {
         setTimeout(()=>document.getElementById(x).style.backgroundColor = SORTING_COLOR,10*i); 
         setTimeout(()=>document.getElementById(y).style.backgroundColor = SORTING_COLOR,10*i); 
       }
       else {
        setTimeout(()=>document.getElementById(x).style.backgroundColor = DEFAULT_COLOR,10*i); 
        setTimeout(()=>document.getElementById(x).style.backgroundColor = DEFAULT_COLOR,10*i); 
       }
     }
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
