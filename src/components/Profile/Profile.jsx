import './Profile.css';
import location from '../../images/Located.svg';
import company from '../../images/Handbag.svg';

export default function Profile({ user }) {
  return (
    <div className="profile">
      <img src={user.avatar_url} alt={user.name} className="profile__avatar" />
      <div className="profile__block">
        <p className="profile__name">{user.name}</p>
        <a href={user.html_url} className="profile__username" target="_blank" rel="noreferrer">
          {user.login}
        </a>
        <div className="profile__location">
          <img src={location} alt="Location" className="profile__point" />
          <p className="profile__town">{user.location}</p>
        </div>
        <div className="profile__organization">
          <img src={company} alt="Company" className="profile__case" />
          <p className="profile__company">{user.company}</p>
        </div>
      </div>
    </div>
  );
}
