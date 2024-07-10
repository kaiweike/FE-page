import '../styles/Follow.css';

const followers = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Foo Bar' }
];

function Following() {
  return (
    <>
      {followers.map((follower) => (
        <div className="flex justify-between px-4 py-2" key={follower.id}>
          <div className="flex">
            <div className="avatar">{follower.name}</div>
            <div className="fullname-username">
              <div className="fullname">Fullname</div>
              <div className="username">@username</div>
            </div>
          </div>
          <button className="following-button">Following</button>
        </div>
      ))}
    </>
  );
}

export default Following;
