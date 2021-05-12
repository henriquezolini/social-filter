const INITIAL_STATE = {
  loading: false,
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
