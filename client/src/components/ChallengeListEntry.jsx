import React from 'react';

var ChallengeListEntry = ({challenge}) => (
  <div className="challenge"> 
  <div className="image"> <img src={challenge.image} /> </div>
  <div className="username"> Challenger: {challenge.username} </div>
  <div className="text"> The Challenge: {challenge.text} </div>
  <div className="date">{challenge.date} </div>
  </div>
);

ChallengeListEntry.propTypes = {
  challenge: React.PropTypes.object.isRequired
};

export default ChallengeListEntry;