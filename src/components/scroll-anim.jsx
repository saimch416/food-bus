// import React from 'react'
// import { VideoScroll } from 'react-video-scroll'
// import demo from '../assets/demo.mp4'

// const setStyles = (wrapperEl, videoEl, playbackRate) => {
//   wrapperEl.style.marginTop = `calc(180% - ${Math.floor(videoEl.duration) *
//     playbackRate +
//     'px'})`
//   wrapperEl.style.marginBottom = `calc(180% - ${Math.floor(videoEl.duration) *
//     playbackRate +
//     'px'})`
// }

// function ScrollAnim() {
//   return (
//     <VideoScroll
//       onLoad={props =>
//         setStyles(props.wrapperEl, props.videoEl, props.playbackRate)
//       }
//       playbackRate={15}
//       style={{ position: 'sticky' }}
//     >
//       <video
//         tabIndex="0"
//         autobuffer="autobuffer"
//         preload="preload"
//         style={{ width: '100%', objectFit: 'contain' }}
//         playsInline
//       >
//         <source type="video/mp4" src={demo} />
//       </video>
//     </VideoScroll>
//   )
// }
// export default ScrollAnim
