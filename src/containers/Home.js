import { connect } from 'react-redux';
import Home from "../components/Home";


const mapStateToProps = (state) => {
  console.log('STATE', state)
  return {
    stories: state.stories
  }
}


export default connect(mapStateToProps, null)(Home);
