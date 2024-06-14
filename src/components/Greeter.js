import styles from "./greeter.module.css";
const title = 'React';

/*function Greeter(){
    return(
        <div className={styles.greeter}>
            <h1>Hello {title}</h1>
        </div>
    );
}
*/
function Greeter(props){
    return(
        <div>
            <h1>{props.greeting} {props.name}, this is React</h1>
        </div>
    )
}

export default Greeter;