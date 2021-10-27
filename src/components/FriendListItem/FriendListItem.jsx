import s from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={s.item} key={id}>
      <span className={s.status} style={{ backgroundColor: isOnline ? 'red' : 'green' }}>
        {isOnline}
      </span>
      <img className={s.avatar} src={avatar} alt="" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
