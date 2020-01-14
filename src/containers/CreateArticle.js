import { connect } from 'react-redux';
import { addStory } from "../redux/actions";
import CreateArticle from "../components/CreateArticle";


const mapStateToProps = (state) => {
  console.log('STATE', state)
  return {
    stories: state.stories
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addStory: (story) => dispatch(addStory(story))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle);
