import React from 'react';

const VoteCounter = ({count, isActive, activeColor, handleVotes}) => (
  <div>
    <button onClick={handleVotes} >
      <i className="fa fa-thumbs-o-up fa-2x" aria-hidden="true"></i>
    </button>
    <p>{count} votes</p>
  </div>
);

VoteCounter.propTypes = {
  count: React.PropTypes.number.isRequired,
  isActive: React.PropTypes.bool,
  activeColor: React.PropTypes.string,
  handleVotes: React.PropTypes.func
};

export default VoteCounter;
