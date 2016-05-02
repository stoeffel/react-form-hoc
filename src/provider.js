import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import rawTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import { hh } from './helpers/h'
import store from './store'
import routes from './routes'

const provider = hh(Provider)
const themeProvider = hh(MuiThemeProvider)
const muiTheme = getMuiTheme(rawTheme)

const Main = () =>
themeProvider({ muiTheme },
  provider({store},
    routes(store)
  )
)

export default hh(Main)
