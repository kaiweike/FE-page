import '../styles/Follow.css';

function Following({ followers }) {
  if (!Array.isArray(followers)) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {followers.map((follower, index) => (
        <div className="flex justify-between px-4 py-2" key={follower.id+index}>
          <div className="flex">
            <div className="avatar">
              <img
                src="src/assets/avatar2.png"
                alt={`${follower.name}'s avatar`}
              />
            </div>
            <div className="fullname-username">
              <div className="fullname">{follower.name}</div>
              <div className="username">{follower.name}</div>
            </div>
          </div>
          <button className="following-button">Following</button>
        </div>
      ))}
    </>
  );
}

export default Following;
