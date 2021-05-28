import React, {Component} from 'react';

export default class Bar extends React.Component {
     render() {
         const {
           value,
           index,
         } = this.props;
         return (
            <div 
              id={index}
              style={{height:value.toString()+"px",width:"10px",backgroundColor:"cyan",display:"inline-block"}}>
            </div>
         );
     };
}