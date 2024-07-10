import '../styles/Follow.css';

const followers = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Foo Bar' }
];

function Followers() {
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
          <button className="follow-button">Follow</button>
        </div>
      ))}
    </>
  );
}

export default Followers;
