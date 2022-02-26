import styles from './Filter.module.css'

const SearchByName = ({value,title,onChange}) => { 
  return (
    <div className={styles.BoxFilter}>
       <h2>{title}:</h2>
      <label className={styles.Filter} >Find contacts by name
        <input type='text' name={value} onChange={onChange}></input>
      </label>
    </div>
    
  )
}

export default SearchByName;