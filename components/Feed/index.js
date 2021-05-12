import { Col, Table, Divider } from 'antd'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getFeedData } from 'redux/actions/feed'
import { columns } from './columns'

function Feed(props) {
  useEffect(() => {
    props.getFeedData()
  }, [])

  return (
    <Col span={18}>
      <Divider orientation="left">Database</Divider>
      <Table columns={columns} loading={props.feed.loading} dataSource={props.feed.data} rowKey="id" />
    </Col>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    getFeedData: () => dispatch(getFeedData()),
  }
}

const mapStateToProps = state => {
  return { feed: state.feed }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
