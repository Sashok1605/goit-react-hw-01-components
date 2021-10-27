const Profile = ({name, tag, location, avatar, stats}) => {
return (
    <div className="profile">
  <div className="description">
    <img
      src={avatar}
      alt={name}
      className="avatar"
    />
    <p className="name">{name}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>
  <ul className="stats">
  {Object.entries(stats).map(([key, value]) => (
    <li key={key}>
      <span className="label">{key}</span>
      <span className="quantity">{value}</span>
    </li>
  ))}
  </ul>
</div>
)
}

export default Profile;