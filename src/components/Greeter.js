import styles from "./greeter.module.css";
const title = 'React';

function Greeter(){
    return(
        <div className={styles.greeter}>
            <h1>Hello {title}</h1>
        </div>
    );
}

export default Greeter;