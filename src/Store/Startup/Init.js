import {
  buildAsyncActions,
  buildAsyncReducers,
} from '@thecodingmachine/redux-toolkit-wrapper'

export default {
  initialState: { loading: true, error: false },
  action: buildAsyncActions('startup/init', async (args, { dispatch }) => {
    setTimeout(() => {
      console.log('App Starting')
    }, 9000)
  }),
  reducers: buildAsyncReducers({ itemKey: null }),
}
