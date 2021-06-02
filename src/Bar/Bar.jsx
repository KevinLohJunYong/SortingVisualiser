import React from 'react';

const widthAdjusted = window.screen.availWidth < 500 ? "20px" : "30px";

export default class Bar extends React.Component {
     getBgColor(isBeingSorted) {
        if(isBeingSorted) return "red";
        return "turquoise";
     }
     adjustHeight(height) {
       if(window.screen.availWidth < 500) return height/2;
       return height;
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
              style={{height:`${this.adjustHeight(height)}px`,width:widthAdjusted,backgroundColor:this.getBgColor(isBeingSorted),display:"inline-block",margin:"1px",marginTop:"10%"}}>
            </div>
         );
     };
}