import { Col, Collapse, Input, DatePicker, Select, Button, Divider, Form } from 'antd'
import { useDispatch } from 'react-redux'
import { filterFeed, getFeedData } from 'redux/actions/feed'
import utils from 'utils'

const { Option } = Select
const { Panel } = Collapse
const { RangePicker } = DatePicker

const social_networks = utils.social_networks()
const lists = utils.lists()

export default function Filter(props) {
  const dispatch = useDispatch()
  const [form] = Form.useForm()

  const onFilter = () => {
    form
      .validateFields()
      .then(values => {
        dispatch(filterFeed(values))
      })
      .catch(info => {
        console.warn(info)
      })
  }

  const onClear = () => {
    form.resetFields()
    dispatch(getFeedData())
  }

  return (
    <Col span={6}>
      <Divider orientation="left">Filter</Divider>
      <Form form={form} initialValues={{}}>
        <Collapse>
          <Panel header="Filter by name" key="1">
            <Form.Item name="filter_name" className="filter-form-item">
              <Input placeholder="Who are you looking for?" />
            </Form.Item>
          </Panel>
          <Panel header="Filter by post" key="2">
            <Form.Item name="filter_post" className="filter-form-item">
              <Input placeholder="What are you looking for?" />
            </Form.Item>
          </Panel>
          <Panel header="Filter by range date" key="3">
            <Form.Item name="filter_date" className="filter-form-item">
              <RangePicker style={{ width: '100%' }} />
            </Form.Item>
          </Panel>
          <Panel header="Filter by list" key="4">
            <Form.Item name="filter_list" className="filter-form-item">
              <Select placeholder="Select a list" style={{ width: '100%' }}>
                {lists.map(list => {
                  return (
                    <Option value={list} key={list}>
                      {list}
                    </Option>
                  )
                })}
              </Select>
            </Form.Item>
          </Panel>
          <Panel header="Filter by social network" key="5">
            <Form.Item name="filter_social_network" className="filter-form-item">
              <Select placeholder="Select a social network" style={{ width: '100%' }}>
                {social_networks.map(social_network => {
                  return (
                    <Option value={social_network} key={social_network}>
                      {utils.capitalize(social_network)}
                    </Option>
                  )
                })}
              </Select>
            </Form.Item>
          </Panel>
        </Collapse>
      </Form>
      <Button type="primary" className="button-filter" size="large" onClick={onFilter} block>
        Filter
      </Button>
      <Button type="default" className="button-clear" size="large" onClick={onClear} block>
        Clear
      </Button>
    </Col>
  )
}
