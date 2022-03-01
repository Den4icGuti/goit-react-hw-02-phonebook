import PropTypes from "prop-types";
import styles from './UserList.module.css'

const userList = ({ item, deleteContact }) => {
  return (
    <div className={styles.ListUsers}>
      <ul className={styles.list}>
        {item.map(({ id, name, number }) => (
          <li key={id} className={styles.item}>
            <span className={styles.text}>{name} </span>
            <span className={styles.text}>{number} </span>
            <button type="button" className={styles.btnDel} onClick={() => deleteContact(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    
  );
};

userList.propTypes = {
  name: PropTypes.string,
  number:PropTypes.string
}

export default userList;

