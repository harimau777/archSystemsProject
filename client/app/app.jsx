import {store} from './state/store.js';
import {LoginContainer} from './login.jsx';
import {ProjectListContainer} from './projectList.jsx';
import {StreamListContainer} from './streamList.jsx';
import {DataListContainer} from './dataList.jsx';
const Provider = ReactRedux.Provider;

const App = ({token}) => {
  if (token) {
    return (
      <div className="app">
        <ProjectListContainer onClick={toggleAccordion} />
        <StreamListContainer onClick={toggleAccordion} />
        <DataListContainer onClick={toggleAccordion} />
      </div>
    );
  } else {
    return (
      <div className="app">
        <LoginContainer />
      </div>
    );
  }
};

const toggleAccordion = (id) => {
  _.each($('.accordionBody'), (tab) => ($(tab).attr('id') === id) ? ($(tab).removeClass('hiddenBody')) : ($(tab).addClass('hiddenBody')));
}

const mapStateToProps = (state) => {
  return {
    token: state.token
  }
}

const AppContainer = ReactRedux.connect(mapStateToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);
