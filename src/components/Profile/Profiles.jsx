import css from "./Profiles.module.css";

const Profiles = (props) => {
  return (
    <div className={css.container}>
      <div className={css.info}>
        <img className={css.img} src={props.image} alt={props.tag} />
        <p className={css.name}>{props.name}</p>
        <p className={css.texts}>@{props.tag}</p>
        <p className={css.texts}>{props.location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listItem}>
          <span className={css.tags}>Followers</span>
          <span className={css.outcomes}>{props.stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.tags}>Views</span>
          <span className={css.outcomes}>{props.stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.tags}>Likes</span>
          <span className={css.outcomes}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profiles;
