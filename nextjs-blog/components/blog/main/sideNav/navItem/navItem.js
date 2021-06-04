import styles from './navItem.module.sass'

export default function NavItem(props){

    return <>
        <p> {props.data.name} </p>
    </>
}