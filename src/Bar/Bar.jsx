import React, {Component} from 'react';

export default class Bar extends React.Component {
     getBgColor(isBeingSorted) {
        if(isBeingSorted) return "red";
        return "turquoise";
     }
     render() {
         const {
           height,
           index,
           isBeingSorted
         } = this.props;
         return (
            <div 
              id={index}
              style={{height:`${height}px`,width:"30px",backgroundColor:this.getBgColor(isBeingSorted),display:"inline-block",margin:"1px",marginTop:"10%"}}>
            </div>
         );
     };
}