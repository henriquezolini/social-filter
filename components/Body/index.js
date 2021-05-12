import { Row, Col } from 'antd'

export default function Body(props) {
  return (
    <div className="page-body">
      <Row>
        <Col span={18} offset={3}>
          <Row gutter={21}>{props.children}</Row>
        </Col>
      </Row>
    </div>
  )
}
