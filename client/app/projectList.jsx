import {ProjectContainer} from './project.jsx';
import {getProjects} from './state/actions.js';

const ProjectList = ({projects, token, handleRefresh, onClick}) => {
  return (
    <div className="projectList">
      <div className="accordionTab">
        <h1 onClick={() => onClick('projectsBody')}>Projects</h1>
      </div>
      <div className="accordionBody" id="projectsBody">
        {displayProjects(projects)}
        <span className="button refreshButton" onClick={() => handleRefresh(token)}>Refresh</span>
      </div>
    </div>
  );
}

const displayProjects = (projects) => {
  if (projects) {
    return _.map(projects, (project) => <ProjectContainer key={project.id} project={project} />);
  }
};

const handleRefresh = (token, dispatch) => dispatch(getProjects(token));

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    token: state.token
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleRefresh: (token) => handleRefresh(token, dispatch)
  };
};

const ProjectListContainer = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(ProjectList);

export {ProjectListContainer};
