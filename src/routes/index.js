import { syncHistory, router, route, index } from './helpers'
import { App, Home, About } from '../containers'

export default (store) => {
  const history = syncHistory(store)

  return (
  router({history},
    route('/react-form-hoc', App,
      index(Home),
      route('about', About)
    )
  )
  )
}
