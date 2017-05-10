import React from 'react'
import '../css/form.css'
import classnames from 'classnames'

class Form extends React.Component {

  state = { phoneWrong: false }

  handleChange = e => {
    const phone = e.target.value
    if(!phone){
      this.setState({phoneWrong:false})
      return
    }
    if(!isNaN(phone) && phone.length === 11){
      this.setState({phoneWrong:false})
    }else{
      this.setState({phoneWrong:true})
    }
  }

  render() {
    return <div class="free-offer-mid">
        <ul class="free-offer-mid-li-01">
            <li><input type="text" id='apply-name' placeholder="称呼/Name"/></li>
            <li><input type="text" id='apply-city' placeholder="城市/City"/></li>
        </ul>
        <ul class="free-offer-mid-li-01">
            <li>
              <input type="text"
                id='apply-phone'
                className={classnames({
                  'phone--wrong':this.state.phoneWrong
                })}
                placeholder="电话/Telephone"
                onChange={this.handleChange}
              />
            </li>
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
