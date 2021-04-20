import React, { PureComponent, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { Tabs, Button } from 'antd'
import { DoubleRightOutlined } from '@ant-design/icons';
import List from '@components/List'
import { getRankTagList, getRankList } from '@api/home'
import './index.less'

const { TabPane } = Tabs

class HotPlate extends PureComponent {

  state = {
    tagList: [],
    tagIndex: 0,
    loading: false,
    rankList: []
  }

  async componentDidMount() {
    this.getRankTagList()
  }

  handleTabsChange = (e) => {
    this.setState({tagIndex: e}, () => {
      this.getRankList()
    })
  }

  getRankTagList = async () => {
    const { tags } = await getRankTagList('/dbApi/j/search_tags', 'GET', {
      type: 'movie',
      source: ''
    })
    const arr = (tags || []).filter(item => item !== "可播放")
    this.setState({tagList: arr})
    this.getRankList(0)
  }

  getRankList = async (index) => {
    this.setState({loading: true})
    const { tagList, tagIndex } = this.state
    const res = await getRankList('/dbApi/j/search_subjects', 'GET', {
      type: 'movie',
      tag: tagList ? tagList[tagIndex] : '热门',
      page_limit: 27,
      page_start: 0
    })
    this.setState({rankList: res.subjects, loading: false})
  }

  goRankMore = () => {
    const { tagList, tagIndex } = this.state
    this.props.history.push(`/typeDetail?type=${tagList[tagIndex]}`)
  }

	render() {
    const { rankList, tagList, loading } = this.state
		return (
			<Fragment>
				<section className='rank-list-wrap'>
          <Tabs tabBarExtraContent={ {left: <h3 className='section-title'>搜索排行榜</h3>, right: <Button type="text" onClick={this.goRankMore}>更多<DoubleRightOutlined /></Button> } } defaultActiveKey='1' tabPosition={'top'} onChange={this.handleTabsChange}>
            {tagList.map((item, index) => (
              <TabPane tab={item} key={index}>
                <List rankList={rankList} loading={loading}/>
              </TabPane>
            ))}
          </Tabs>
				</section>
			</Fragment>
		)
	}
}

export default withRouter(HotPlate)