import { Card } from '../components/Card'
import { Page } from '../components/Page'

export const Events = () => {
    return (
      <div>
      <Page custom={"min-h-screen py-40 bg-orange"}>
        <h1>Events</h1>
        <Card>
          <img src="/sample01.jpg" alt="" />
          <h1>MŰVÉSZ</h1>
          <p>bemutatkozó szöveg</p>
          <p>esemény</p>
        </Card>
        <Card>
          <img src="/sample02.jpg" alt="" />
          <h1>MŰVÉSZ</h1>
          <p>bemutatkozó szöveg</p>
          <p>esemény</p>
        </Card>
      </Page>
    </div>
    )
  }