class utils {
  static randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  static lists() {
    return ['List 1', 'List 2', 'List 3', 'List 4', 'List 5', 'List 6', 'List 7', 'List 8', 'List 9']
  }
  static social_networks() {
    return ['facebook', 'instagram', 'twitter']
  }
  static capitalize = s => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
}

export default utils
