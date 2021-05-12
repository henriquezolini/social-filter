import { Header, Body, Filter, Feed } from '../components'

export default function Home() {
  return (
    <>
      <Header>Social Filter</Header>
      <Body>
        <Filter />
        <Feed>Feed</Feed>
      </Body>
    </>
  )
}
