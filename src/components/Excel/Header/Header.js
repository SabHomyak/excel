import React from "react";
import classes from './header.module.scss'
import { useHistory} from "react-router-dom";

const Header = (props) => {
    let history = useHistory()
    return <div className={classes.header}>
        <input className={classes.input}
               onInput={(event) => {
                   props.setTitle(event.currentTarget.value)
               }}
               type="text" defaultValue={props.title}/>
        <div>
            <div className={classes.button}
                 onClick={() => {
                     props.openModal({
                         text: 'А не сохранить ли нам файл?',
                         callback: () => {
                             props.updateExcel()
                         }
                     })
                 }}
            >
                <i className='material-icons'>save_alt</i>
            </div>
            <div className={classes.button}
                 onClick={() => {
                     props.openModal({
                         text: 'А не удалить ли нам файл?',
                         redirect: 'dashboard',
                         callback: async () => {
                             await props.deleteExcel(props.idFile)
                         }
                     })
                 }}>
                <i className='material-icons'>delete</i>
            </div>
            <div className={classes.button}
                 onClick={() => {
                     props.openModal({
                         text: 'Вы действительно хотите выйти?',
                         // redirect: 'dashboard',
                         // callback open modal ... maybe?
                         callback: ()=>{
                             if(props.callback){
                                 props.callback()
                             } else {
                                 history.push('dashboard')
                             }
                         }
                     })
                 }}>
                <i className='material-icons'>exit_to_app</i>
            </div>
        </div>
    </div>
}
export default Header
