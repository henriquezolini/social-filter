import { Tag, Popover, Button } from 'antd'
import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons'

const columns = [
  {
    title: 'Post date',
    dataIndex: 'post_date',
    key: 'post_date',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Social network',
    dataIndex: 'social_network',
    key: 'social_network',
    render: social => {
      switch (social) {
        case 'facebook':
          return (
            <Tag icon={<FacebookOutlined />} color="#3b5999">
              Facebook
            </Tag>
          )
        case 'instagram':
          return (
            <Tag icon={<InstagramOutlined />} color="#dd2a7b">
              Instagram
            </Tag>
          )
        case 'twitter':
          return (
            <Tag icon={<TwitterOutlined />} color="#55acee">
              Twitter
            </Tag>
          )
        default:
          return '-'
      }
    },
  },
  {
    title: 'Lists',
    dataIndex: 'lists',
    key: 'lists',
    render: lists => {
      return lists.map(list => {
        return <Tag key={list}>{list}</Tag>
      })
    },
  },
  {
    title: 'Post link',
    dataIndex: 'social_network',
    key: 'social_network',
    render: social_network => {
      return (
        <Button type="primary" href={`https://${social_network}.com`} target="_blank">
          View post
        </Button>
      )
    },
  },
]

export { columns }
