const INITIAL_STATE = {
  loading: false,
  filters: {},
  data: [],
}

const feed = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'setFeedLoading': {
      return {
        ...state,
        loading: action.payload,
      }
    }
    case 'setFilter': {
      const filters = action.payload
      let filtered = state.data

      if (filters.filter_name) {
        filtered = filtered.filter(reg => {
          return reg.name.indexOf(filters.filter_name) > -1
        })
      }
      if (filters.filter_post) {
        filtered = filtered.filter(reg => {
          return reg.post.indexOf(filters.filter_post) > -1
        })
      }
      if (filters.filter_date) {
        filtered = filtered.filter(reg => {
          return reg.post_date >= filters.filter_date[0] && reg.post_date <= filters.filter_date[1]
        })
      }
      if (filters.filter_list) {
        filtered = filtered.filter(reg => {
          return reg.list === filters.filter_list
        })
      }
      if (filters.filter_social_network) {
        filtered = filtered.filter(reg => {
          return reg.social_network === filters.filter_social_network
        })
      }

      return {
        ...state,
        data: filtered,
        filters: action.payload,
      }
    }
    case 'setFeedData': {
      return {
        ...state,
        loading: false,
        data: [...action.payload],
      }
    }
    default:
      return state
  }
}

export default feed
