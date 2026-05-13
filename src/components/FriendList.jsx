import css from "../css/FriendList.module.css";
import clsx from "clsx";
const FriendList = ({ friends }) => {
  return (
    <div className={css.container}>
      {friends.map((data) => (
        <div key={data.id} className={css.card}>
          <img src={data.avatar} alt={data.id} width="48" />
          <p className={css.name}>{data.name}</p>
          <p
            className={clsx(
              css.isOnline,
              data.isOnline ? css.online : css.offline,
            )}
          >
            {data.isOnline ? "Online" : "Offline"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FriendList;
