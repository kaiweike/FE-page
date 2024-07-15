import '../styles/Follow.css';
import { UserData } from '../types';

interface FollowingProps {
  followers: UserData;
}

function Following({ followers }: FollowingProps) {
  function SkeletonLoader() {
    return (
      <>
        <div className="flex animate-pulse justify-between px-4 py-2">
          <div className="flex">
            <div className="avatar bg-slate-400"></div>
            <div className="fullname-username">
              <div className="fullname">
                <div className="m-2 h-2 w-24 rounded bg-slate-400" />
              </div>
              <div className="username">
                <div className="mx-2 h-2 w-20 rounded bg-slate-400" />
              </div>
            </div>
          </div>
          <button className="following-button"></button>
        </div>
      </>
    );
  }

  return (
    <>
      {!followers.length && <SkeletonLoader />}
      {followers.length > 0 &&
        followers.map((follower, index) => (
          <div
            className="flex justify-between px-4 py-2"
            key={follower.id + index}
          >
            <div className="flex">
              <div className="avatar">
                <img
                  src="/api_example/avatar2.png"
                  alt={`${follower.name}'s avatar`}
                />
              </div>
              <div className="fullname-username">
                <div className="fullname">{follower.name}</div>
                <div className="username">@{follower.name}</div>
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

export default Following;
