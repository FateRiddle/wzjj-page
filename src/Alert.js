import React from 'react'
import $ from 'jquery'
import { apply } from './api'
// import checkUrl from './image/check.png'

class Alert extends React.Component {

  state = {hidden:true, msg:''}

  componentDidMount() {

    $('#apply').click(()=>{
      const name = $('#apply-name').val()
      const city = $('#apply-city').val()
      const phone = $('#apply-phone').val()
      const area = $('#apply-area').val()
      const ok = this.basicVerify({ name,city,phone,area })
      if(ok){
        apply({ name,city,phone,area }).then(output => {
          if(output.ok){
            this.popMsg('报名成功！')
            this.clearInfo()
          }else{
            this.popMsg(output.msg)
          }
        })
      }
    })
  }

  popMsg = (msg) => {
    this.setState({ hidden:false,msg })
  }

  close = () => {
    this.setState({hidden:true,msg:''})
  }

  basicVerify = ({ name,city,phone,area }) => {
    let ok = true
    if(name === '' || city === '' || phone ==='' || area ===''){
      ok = false
      this.popMsg('请填写完整信息。')
    } else if(phone.length < 10 || isNaN(phone)) {
      ok = false
      this.popMsg('请填写正确的电话号码。')
    } else if(isNaN(area)){
      ok = false
      this.popMsg('面积请填写数字。')
    }
    return ok
  }

  clearInfo = () => {
    const name = $('#apply-name').val('')
    const city = $('#apply-city').val('')
    const phone = $('#apply-phone').val('')
    const area = $('#apply-area').val('')
  }


  render(){
    const { hidden,msg } = this.state
    return (!hidden &&
      <div className="Alert">
        hello{msg}
        {/* <img src={checkUrl} alt=""/> */}
        <div className="Alert__OkButton" onClick={this.close}>确定</div>
      </div>
    )
  }
}

export default Alert
