import React, { PureComponent, Fragment, lazy, Suspense } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { Layout, BackTop } from 'antd'
import Header from '@components/Header'
import Footer from '@components/Footer'

const { Content } = Layout

const Home = lazy(() => import('@pages/Home'))
const About = lazy(() => import('@pages/About'))

export default class Index extends PureComponent {
	render() {
		return (
			<Fragment>
				<Layout style={{ background: '#fff' }}>
					<BrowserRouter>
						<Header />
						<Suspense fallback={<div>loading...</div>}>
							<Content>
								<Route path='/home' component={Home} />
                <Route path='/about' component={About} />
                <Redirect to='/home' />
							</Content>
						</Suspense>
            <Footer />
					</BrowserRouter>
				</Layout>
        <BackTop />
			</Fragment>
		)
	}
}
