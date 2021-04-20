import React, { PureComponent, Fragment } from 'react'
import { Row, Col } from 'antd'

export default class content extends PureComponent {
  render() {
    return (
      <Fragment>
				<Row justify="center">
					<Col span={16}>
						<section className='desc'>
							<div className='title'>
								<h2>影视全搜索</h2>
								<p>本站是一个提供全网影视资源检索的站点，其包含了全网10多个影视资源站点的资源。为您提供最全的影视资源检索。关注公众号：古图</p>
							</div>
						</section>
					</Col>
				</Row>
			</Fragment>
    )
  }
}
