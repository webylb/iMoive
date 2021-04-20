import React, { PureComponent, Fragment, lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Layout, BackTop } from 'antd'
import Header from '@components/Header'
import Footer from '@components/Footer'

const { Content } = Layout
const Home = lazy(() => import('@pages/Home'))
const About = lazy(() => import('@pages/About'))
const ItemDetail = lazy(() => import('@pages/Detail'))
const TypeDetail = lazy(() => import('@pages/TypeDetail'))
const SearchDetail = lazy(() => import('@pages/SearchDetail'))

export default class Index extends PureComponent {
	render() {
		return (
			<Fragment>
				<Layout style={{ background: '#fff' }}>
					<BrowserRouter>
						<Header />
						<Suspense fallback={<div>loading...</div>}>
							<Content style={{ minHeight: '80vh' }}>
								<Switch>
									<Route path='/home' component={Home} />
									<Route path='/about' component={About} />
									<Route path='/itemDetail' component={ItemDetail} />
									<Route path='/typeDetail' component={TypeDetail} />
									<Route path='/searchDetail' component={SearchDetail} />
									<Redirect to='/home' />
								</Switch>
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
