import React, { PureComponent, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Layout } from 'antd'
import './index.less'
const { Footer } = Layout

export default class Foot extends PureComponent {
	render() {
		return (
			<Fragment>
				<Footer id='footer'>
					<section className='im-footer-bottom'>
						<div className='im-footer-bottom-container'>
							Made with <span style={{color: 'rgb(255, 255, 255)'}}>❤</span> by{' '}
              <Link to='/about'>iMovie</Link>
						</div>
					</section>
				</Footer>
			</Fragment>
		)
	}
}
