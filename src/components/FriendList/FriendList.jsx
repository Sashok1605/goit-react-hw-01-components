import FriendListItem from "../FriendListItem/FriendListItem"
import friends from '../../data/friends.json'
const FriendList = () => {
    const friendsList = friends.map(item => <FriendListItem key={item.id} {...item}/>)
    return (
        <ul className="friend-list">
           {friendsList}
        </ul>
    )
}

export default FriendList;