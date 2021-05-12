import { Col, Collapse, Input, DatePicker, Select, Button, Divider } from 'antd'
import utils from 'utils'

const { Option } = Select
const { Panel } = Collapse
const { RangePicker } = DatePicker

const social_networks = utils.social_networks()
const lists = utils.lists()

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`

export default function Filter(props) {
  return (
    <Col span={6}>
      <Divider orientation="left">Filter</Divider>
      <Collapse activeKey={[1, 2, 3, 4, 5]}>
        <Panel header="Filter by name" key="1">
          <Input placeholder="Who are you looking for?" />
        </Panel>
        <Panel header="Filter by post" key="2">
          <Input placeholder="What are you looking for?" />
        </Panel>
        <Panel header="Filter by range date" key="3">
          <RangePicker style={{ width: '100%' }} />
        </Panel>
        <Panel header="Filter by list" key="4">
          <Select placeholder="Select a list" style={{ width: '100%' }}>
            {lists.map(list => {
              return (
                <Option value={list} key={list}>
                  {list}
                </Option>
              )
            })}
          </Select>
        </Panel>
        <Panel header="Filter by social network" key="5">
          <Select placeholder="Select a social network" style={{ width: '100%' }}>
            {social_networks.map(social_network => {
              return (
                <Option value={social_network} key={social_network}>
                  {utils.capitalize(social_network)}
                </Option>
              )
            })}
          </Select>
        </Panel>
      </Collapse>
      <Button type="primary" className="button-filter" size="large" block>
        Filter
      </Button>
      <Button type="default" className="button-clear" size="large" block>
        Clear
      </Button>
    </Col>
  )
}
