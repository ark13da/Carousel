import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Caros from './components';

let styles = {
    margin: 'auto',
    width: '500px'
  };
  {/*
 const buckets={
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

function imParser (bucket) {
  let buckArr = [];
  for (let i = 0; i< Object.keys(bucket).length; i++){
    buckArr.push(<Caros src={Object.values(bucket)[i].src} alt={Object.values(bucket)[i].alt}/>);
  }

  return (buckArr);
} ;

const myParser=imParser(buckets);

function App() {
  return (
	<div style={styles}>
		<carousel>
      {myParser}
    </carousel>
		
	</div>
  );
}

export default App;
*/} // this works with Caros as defined with props that have to be fed in  App.js
function App() {
  return (
	<div style={styles}>
		<carousel>
      <Caros/>
    </carousel>
		
	</div>
  );
}
export default App;