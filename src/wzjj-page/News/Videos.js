import React from 'react'
import banner from '../image/news_video.png'

class Videos extends React.Component {

  render() {
    return <div className="Videos">
      <img class='Videos__Banner' src={banner} alt=""/>
      <video src="">video1</video>
      <video src="">video2</video>
    </div>
  }
}

export default Videos
