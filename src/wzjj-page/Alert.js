import React from 'react'
import { apply } from './api'
import './css/alert.css'

class Alert extends React.Component {

  state = {hidden:true, msg:''}

  componentDidMount() {

    document.querySelector('#apply').addEventListener('click',()=>{
      const name = document.querySelector('#apply-name').value
      const city = document.querySelector('#apply-city').value
      const phone = document.querySelector('#apply-phone').value
      const area = document.querySelector('#apply-area').value
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
      console.log('haha');
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
    const name = document.querySelector('#apply-name').value('')
    const city = document.querySelector('#apply-city').value('')
    const phone = document.querySelector('#apply-phone').value('')
    const area = document.querySelector('#apply-area').value('')
  }


  render(){
    const { hidden,msg } = this.state
    return (!hidden &&
      <div className="Alert__mask">
        <div className="Alert">
          <header></header>
          <main>{msg}</main>
          <div className="Alert__OkButton" onClick={this.close}>确定</div>
        </div>
      </div>
    )
  }
}

export default Alert
