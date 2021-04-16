import React, { PureComponent, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Row, Col } from 'antd'
import './index.less'
const { Footer } = Layout

export default class Foot extends PureComponent {
	render() {
		return (
			<Fragment>
				<Footer id='footer'>
					<section class='im-footer-bottom'>
						<div class='im-footer-bottom-container'>
							Made with <span style={{color: 'rgb(255, 255, 255)'}}>❤</span> by{' '}
              <Link to='/about'>iMovie</Link>
						</div>
					</section>
				</Footer>
			</Fragment>
		)
	}
}
