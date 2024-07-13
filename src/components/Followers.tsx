import '../styles/Follow.css';

function Followers({ followers }) {
  if (!Array.isArray(followers)) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {followers.map((follower, index) => (
        <div
          className="flex justify-between px-4 py-2"
          key={follower.id + index}
        >
          <div className="flex">
            <div className="avatar">
              <img
                src="src/assets/avatar1.png"
                alt={`${follower.name}'s avatar`}
              />
            </div>
            <div className="fullname-username">
              <div className="fullname">{follower.name}</div>
              <div className="username">{follower.username}</div>
            </div>
          </div>
          {follower.isFollowing ? (
            <button className="following-button">Following</button>
          ) : (
            <button className="follow-button">Follow</button>
          )}
        </div>
      ))}
    </>
  );
}

export default Followers;
