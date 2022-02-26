import PropTypes from "prop-types";
import styles from './UserList.module.css'

const userList = ({ item }) => {
  return (
    <div className={styles.ListUsers}>
     
      <ul>
        {item.map(({ id, name, number }) => (
          <li key={id}>
            <span>{name} </span>
            <span>{number} </span>
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

