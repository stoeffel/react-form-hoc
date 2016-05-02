import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import AppBar from 'material-ui/AppBar'
import SimpleExample from './simpleExample'
import { h, hh } from '../helpers/h'
import bindActionCreators from '../helpers/bindActionCreators'

const { h1, button, div } = h
const appBar = hh(AppBar)
const simpleExample = hh(SimpleExample)
const style = {
  margin: '2em',
}

const App = ({children, pushLocation}) =>
div(null,
  appBar({
    title: 'React Form HOC',
    showMenuIconButton: false
  }),
  div({ style },
    simpleExample()
  )
)

const mapStateToProps = () => ({})

export default connect(
  mapStateToProps,
  bindActionCreators({
    pushLocation: push
  })
)(App)
