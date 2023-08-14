import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
const Fullpage = (props) => {
 return(
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          {props.children}
        </ReactFullpage.Wrapper>
      );
    }}
  />)
  }
export default Fullpage