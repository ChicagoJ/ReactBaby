import React, { Component } from 'react'
import jsonp from 'jsonp'
/**
 * 1.给input绑定值改编事件，当值发生改编的时候调用对应的监听函数word属性
 */
class Suggest extends Component {
  constructor() {
    super()
    this.state = {
      words: [],
      index: -1
    }
    this.wd = ''
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }
  handleChange(event) {
    let wd = event.target.value
    //缓存用户输入的关键字
    this.wd = wd
    jsonp(
      `http://www.baidu.com/su?wd=${wd}`,
      { param: 'cb' },
      (error, data) => {
        this.setState({
          words: data.s
        })
      }
    )
  }
  handleKeyDown(event) {
    let code = event.keyCode
    //当按下的是向上和向上箭头的时候
    if (code === 38 || code === 40) {
      let index = this.state.index
      if (code === 38) {
        index--
        if (index === -2) {
          index = this.state.words.length - 1
        }
      } else if (code === 40) {
        index++
        if (index === this.state.words.length) {
          index = -1
        }
      }
      this.setState({ index })
    } else if (code === 13) {
      window.location.href = `http://www.baidu.com/s?wd=${event.target.value}`
    }
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">
            <div className="panel panel-default">
              <div className="panel-heading">
                <input
                  type="text"
                  value={
                    this.state.index === -1
                      ? this.wd
                      : this.state.words[this.state.index]
                  }
                  className="form-control"
                  onChange={this.handleChange}
                  onKeyDown={this.handleKeyDown}
                />
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  {this.state.words.map((word, index) => (
                    <li
                      key={index}
                      className={
                        'list-group-item ' +
                        (index === this.state.index ? 'active' : '')
                      }
                    >
                      {word}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Suggest
