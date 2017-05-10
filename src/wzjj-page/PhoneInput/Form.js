import React from 'react'

class Form extends React.Component {

  state = { phoneCorrect: false }

  render() {
    return <div class="free-offer-mid">
        <ul class="free-offer-mid-li-01">
            <li><input type="text" id='apply-name' placeholder="称呼/Name"/></li>
            <li><input type="text" id='apply-city' placeholder="城市/City"/></li>
        </ul>
        <ul class="free-offer-mid-li-01">
            <li><input type="text" id='apply-phone' placeholder="电话/Telephone" /></li>
            <li><input type="text" id='apply-area' placeholder="建筑面积/Area        ㎡"/></li>
        </ul>
        <ul class="free-offer-mid-li-01">
            <li class="free-li-01">咨询热线 400-119-0169</li>
            <li><button id='apply'>申请</button></li>
        </ul>
    </div>
  }
}

export default Form
