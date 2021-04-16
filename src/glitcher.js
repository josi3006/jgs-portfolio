import React from 'react';
import GlitchClip from 'react-glitch-effect/core/GlitchClip';
import splash from './images/google.png';

const IsGlitchy = () => {

    return (
      <GlitchClip onHover={true}>
        <img src={splash} />
      </GlitchClip>
    )
}

export default IsGlitchy;
 
 /* props: 
 * duration: number,
 * iterationCount: string,
 * disabled: bool,
 * onHover: bool,
 * */