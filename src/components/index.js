import React, {Component} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";

{/*}
class Caros extends Component {
    constructor(props){
        super(props);
    }
        render(){
        return(<div>
            <img src= {this.props.src} alt= {this.props.alt}/>
            <p className="legend">{this.props.alt}</p>
        </div>
    );  
        }
}
*/}// this works with Caros as defined with props that have to be fed in  App.js



class Caros extends Component{

    constructor(props){
        super(props)
       
  this.imParser=this.imParser.bind(this)
 


  this.buckets={
    im1:{
        src: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg"
        ,alt: "Hong Kong"
    },
    im2: {
        src: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp"
        ,alt: "Singapore"
    }
    ,im3:{
        src: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp"
        ,alt: "Japan"
        }
    ,im4:{
        src: "https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp"
        ,alt: "Las Vegas"
        }
    };
    }
    
  imParser (bucket){
    let buckArr = [];
    for (let i = 0; i< Object.keys(bucket).length; i++){
       buckArr.push(<div><img src= {Object.values(bucket)[i].src} alt= {Object.values(bucket)[i].alt} /><p className="legend">{Object.values(bucket)[i].alt}</p></div>);

    }

    return (buckArr);
}

    
 
render(){

   return(
   <div>
        {this.imParser(this.buckets)}
    </div>
   );
}
}



export default Caros;