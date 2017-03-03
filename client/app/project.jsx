import {setCurrentProject, getStreams} from './state/actions.js';

const Project = ({token, key, project, selectProject}) => {
  return (
    <div className="project" onClick={() => selectProject(token, project.id)}>
      {project.name}
    </div>
  );
};

const selectProject = (token, id, dispatch) => {
  dispatch(setCurrentProject(id));
  dispatch(getStreams(token, id));
};

const mapStateToProps = (state) => {
  return {
    token: state.token
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectProject: (token, id) => selectProject(token, id, dispatch)
  };
};

const ProjectContainer = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Project);

export {ProjectContainer};
