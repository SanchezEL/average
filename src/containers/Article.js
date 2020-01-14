import { connect } from 'react-redux';
import Article from "../components/Article";


const mapStateToProps = (state) => {
  return {
    stories: state.stories
  }
}

export default connect(mapStateToProps, null)(Article);
