import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { Card, Spin, Tag } from 'antd'
import './index.less'

const { Meta } = Card

class List extends PureComponent {

  goDetail = (id) => {
    return () => {
      this.props.history.push(`/itemDetail?id=${id}`)
    }
  }

  render() {
    const { rankList, loading } = this.props
    return (
      <Spin spinning={loading}>
        <div className="rank-list">
          {
            (rankList || []).map((item) => {
              return <Card
                hoverable
                className="rank-item"
                key={item.id}
                cover={<img className="rank-item-img"
                alt={item.title}
                src={ 'https://images.weserv.nl/?url=' + item.cover}
                onClick={this.goDetail(item.id)}
                />}
              >
                <Meta className="rank-des" description={
                  <div>
                    { item.is_new ? <Tag color="#87d068" className="rank-tag">新</Tag> : ''}
                    <span>{item.title}</span>
                    <span className="rank-mark"> {item.rate}</span>
                  </div>
                } />
              </Card>
            })
          }
        </div>
      </Spin>
    )
  }
}


export default withRouter(List)