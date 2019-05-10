import React, { useReducer, useEffect } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'success':
      return { loading: false, data: state.data, error: null }
    case 'error':
      return { loading: false, data: null, error: state.error }
    default:
      return { loading: true, data: null, error: null }
  }
}

const DataLoader = ({ request, children }) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: true,
    data: null,
    error: null,
  })
  useEffect(() => {
    request()
      .then(data => dispatch({ action: 'success', data }))
      .catch(error => dispatch({ action: 'error', error }))
  }, [request, state])
  return children(state)
}

export default DataLoader
