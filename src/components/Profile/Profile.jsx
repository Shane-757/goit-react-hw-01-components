import React from 'react';
import './Profile.css';
import PropTypes from 'prop-types';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="profileAvatar" />
        <h1 className="name">{username}</h1>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className='statsList'>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers.toLocalString()}</span>
        </li>
        <li className='statsList'>
          <span className="label">Views</span>
          <span className="quantity">{stats.views.toLocalString()}</span>
        </li>
        <li className='statsList'>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes.toLocalString()}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;