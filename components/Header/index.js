import { Typography, Row, Col } from 'antd'

const { Title } = Typography

export default function Header(props) {
  return (
    <div className="page-header">
      <Row>
        <Col span={18} offset={3}>
          <Title>{props.children}</Title>
        </Col>
      </Row>
    </div>
  )
}
