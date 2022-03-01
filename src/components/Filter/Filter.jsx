import styles from './Filter.module.css'

const Filter = ({value,title,onChange}) => { 
  return (
    <div className={styles.BoxFilter}>
       <h2>{title}</h2>
      <label className={styles.Filter} >Find contacts by name
        <input type='text' value={value} onChange={onChange}/>
      </label>
    </div>
    
  )
}

export default Filter;