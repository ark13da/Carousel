import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


class Caros extends Component {

    constructor (props){
        super(props);

        this.state={
            src:'non'
           ,alt: 'non'
        }
    }
 bucket={
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
 

 

render(){
    imParser = (bucket)=>{
        let buckArr = [];
        for (let i = 0; i< Object.keys(bucket).length; i++){
           this.buckArr.push(<div><img src= {bucket.Object.keys(bucket)[i].src} alt= {bucket.Object.keys(bucket)[i].alt} /><p className="legend">{bucket.Object.keys(bucket)[i].alt}</p></div>);
        }
        return (buckArr);
    } 
}

}

export default Caros;