import React from 'react';
import { Link } from 'react-router';
import ChallengeList from './ChallengeList.jsx';
import UserProfile from './UserProfile.jsx'
import dummyData from './dummyData.js';

// challenges data is temporarily living in this.state.challenges
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: dummyData.challenges
    };
  }

  // for routing to components
    // use <Login /> for login
    // use <ChallengeCreateForm /> for challenge create form
    // note: may want to pass down the username as props to these or use it in redux's state

  render() {
    return (
      <div>
        <h1>Home page</h1>
        <Link to="/challenge/create">Create a Challenge</Link>
        <ChallengeList challenges={this.state.challenges} />
        <UserProfile />
      </div>
    );
  }
}

export default App;
