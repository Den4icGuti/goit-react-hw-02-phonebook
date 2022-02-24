import PropTypes from "prop-types";

const userList = ({ item, title }) => {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {item.map(({ id, name, number }) => (
          <li key={id}>
            <span>{name} </span>
            <span>{number} </span>
          </li>
        ))}
      </ul>
    </>
  
  );
};

userList.propTypes = {
  name: PropTypes.string,
  number:PropTypes.string
}

export default userList;

