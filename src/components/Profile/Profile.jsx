import s from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt={name} className={s.userImg} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <ul className={s.list}>
        {Object.entries(stats).map(([key, value]) => (
          <li className={s.stats} key={key}>
            <span className={s.label}>{key}</span>
            <span className={s.quantity}>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
