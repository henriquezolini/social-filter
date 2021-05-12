import faker from 'faker'
import utils from 'utils'

const social_networks = utils.social_networks()
const lists = utils.lists()

export default (req, res) => {
  let feed = []
  let reg_list = []
  for (let index = 0; index < 100; index++) {
    reg_list = [
      lists[utils.randomIntFromInterval(0, 8)],
      lists[utils.randomIntFromInterval(0, 8)],
      lists[utils.randomIntFromInterval(0, 8)],
    ]
    feed[index] = {
      id: index,
      post_date: faker.date.recent(),
      social_network: social_networks[utils.randomIntFromInterval(0, 2)],
      email: faker.internet.email(),
      post: faker.lorem.paragraph(),
      name: faker.name.findName(),
      lists: reg_list.filter(function (item, pos) {
        return reg_list.indexOf(item) == pos
      }),
    }
  }
  res.status(200).json(feed)
}
