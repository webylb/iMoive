import React, { PureComponent, Fragment } from 'react'
import { Input, AutoComplete } from 'antd'
import { SearchOutlined, UserOutlined } from '@ant-design/icons'
import './index.less'

export default class Search extends PureComponent {

	renderTitle = title => (
		<span>
			{title}
			<a
				style={{
					float: 'right'
				}}
				href='https://www.google.com/search?q=antd'
				target='_blank'
				rel='noopener noreferrer'
			>
				more
			</a>
		</span>
	)

	renderItem = (title, count) => ({
		value: title,
		label: (
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between'
				}}
			>
				{title}
				<span>
					<UserOutlined /> {count}
				</span>
			</div>
		)
	})

	options = [
		{
			label: this.renderTitle('Libraries'),
			options: [this.renderItem('AntDesign', 10000), this.renderItem('AntDesign UI', 10600)]
		},
		{
			label: this.renderTitle('Solutions'),
			options: [this.renderItem('AntDesign UI FAQ', 60100), this.renderItem('AntDesign FAQ', 30010)]
		},
		{
			label: this.renderTitle('Articles'),
			options: [this.renderItem('AntDesign design language', 100000)]
		}
	]

	render() {
		return (
			<Fragment>
				<div id='search-box'>
					<AutoComplete
						dropdownClassName='certain-category-search-dropdown'
						dropdownMatchSelectWidth={500}
						style={{
              minWidth: 300
						}}
						options={this.options}
					>
            <Input placeholder="站内搜索..." prefix={<SearchOutlined style={{color: 'rgba(0,0,0,.25)'}} />} />
					</AutoComplete>
				</div>
			</Fragment>
		)
	}
}
