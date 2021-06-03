import React from 'react';

const widthAdjusted = window.screen.availWidth < 1000 ? "25px" : "30px";

export default class Bar extends React.Component {
     getBgColor(isBeingSorted) {
        if(isBeingSorted) return "red";
        return "turquoise";
     }
     adjustHeight(height) {
       if(window.screen.availWidth < 1000) return height/2;
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
              style={{height:`${this.adjustHeight(height)}px`,
              width:widthAdjusted,backgroundColor:this.getBgColor(isBeingSorted),
              display:"inline-block",
              margin:"1px",
              marginTop:"4%"}}>
            </div>
         );
     };
}