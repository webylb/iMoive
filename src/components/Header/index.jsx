import React, { PureComponent, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Row, Col } from 'antd'
import Search from '@components/Search'
import './index.less'
const { Header } = Layout

export default class Head extends PureComponent {

  state = {
    defaultSelect: '1'
  }

	render() {
    const { defaultSelect } = this.state
		return (
			<Fragment>
				<Header id="header">
					<Row>
						<Col xs={24} sm={24} md={5} lg={5} xl={5} xxl={4}>
              <Link to="/home" className="logo-wrap">
                <img className="logo" src="http://movie.dyboke.cn/view/vatfs/default/static/logo.png" alt=""/>
                <span className="logo-title">影视全搜索</span>
              </Link>
						</Col>
						<Col xs={0} sm={0} md={19} lg={19} xl={19} xxl={20}>
              <Row justify="center" align="top">
                <Col flex="3"><Search/></Col>
                <Col flex="1">
                  <Menu theme='light' mode='horizontal' defaultSelectedKeys={defaultSelect}>
                    <Menu.Item key='1'>nav 1</Menu.Item>
                    <Menu.Item key='2'>nav 2</Menu.Item>
                    <Menu.Item key='3'>nav 3</Menu.Item>
                  </Menu>
                </Col>
              </Row>
						</Col>
					</Row>
				</Header>
			</Fragment>
		)
	}
}
