import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import friends from '../../data/friends.json';
import s from './FriendList.module.css';

const FriendList = () => {
  const friendsList = friends.map(item => <FriendListItem key={item.id} {...item} />);
  return <ul className={s.list}>{friendsList}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
export default FriendList;
