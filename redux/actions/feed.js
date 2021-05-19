import api from 'pages/api'

export const getFeedData = () => {
  return dispatch => {
    dispatch(setFeedLoading(true))
    api
      .get('/feed')
      .then(res => {
        dispatch(setFeedData(res.data))
        dispatch(setFeedLoading(false))
      })
      .catch(err => {
        dispatch(setFeedLoading(false))
      })
  }
}

export const filterFeed = values => {
  return dispatch => {
    dispatch(setFilter(values))
  }
}

export const setFilter = values => {
  return {
    type: 'setFilter',
    payload: values,
  }
}

export const setFeedData = data => ({
  type: 'setFeedData',
  payload: [...data],
})

const setFeedLoading = value => {
  return {
    type: 'setFeedLoading',
    payload: value,
  }
}
