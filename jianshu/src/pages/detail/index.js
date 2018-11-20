import React, { Component } from 'react'
import { DetailWrapper, Header, Content } from './style'
class Detail extends Component {
  state = {}
  render() {
    return (
      <DetailWrapper>
        <Header>是乱伦界一姐，也是中国第一位女外交家</Header>
        <Content>
          <img
            src="https://upload-images.jianshu.io/upload_images/6356961-c41730b8bf2934df.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/554/format/webp"
            alt=""
          />
          <p>
            <b>她，生得秋水为神，芙蓉满面，</b>
            比花花解语，比玉玉生香，是广大高富帅梦寐以求的绝世佳人。
          </p>
          <p>
            他，长身伟干，粉面朱唇，俊美霸气，最大集团太子爷，无数女粉丝想要为他生猴子的男神。
          </p>
          <p>但他们，屏蔽外界的纷纷扰扰，心里眼里只容得下彼此。</p>
          <p>妾发初覆额，折花门前剧。 郎骑竹马来，绕床弄青梅。</p>
          <p>同居齐宫室，两小无嫌猜。 作者：素手调羹</p>
        </Content>
      </DetailWrapper>
    )
  }
}

export default Detail
