import React from "react";
import classes from './header.module.scss'


const Header = (props) => {
    return <div className={classes.header}>
        <input className={classes.input}
               onInput={(event) => {
                   props.setTitle(event.currentTarget.value)
               }}
               type="text" defaultValue={props.title}/>
        <div>
            <div className={classes.button}
                 onClick={()=>{
                     //можно отказатья от @type@ ведь он не нужон
                     props.openModal({
                         text:'А не сохранить ли нам файл?',
                         callback:()=>{
                             props.testDispatch()
                         }
                     })
                 }}
            >
                <i className='material-icons'>save_alt</i>
            </div>
            <div className={classes.button}
                 onClick={()=>{
                     props.openModal({
                         text:'А не удалить ли нам файл?',
                         redirect:'dashboard',
                         callback:()=>{
                             localStorage.removeItem('tableState')
                             props.setInitialState()
                         }
                     })
                 }}>
                <i className='material-icons'>delete</i>
            </div>
            <div className={classes.button}
                 onClick={()=>{
                     props.openModal({
                         text:'А не сохранить ли нам файл?',
                         type:'saveee'
                     })
                 }}>
                <i className='material-icons'>exit_to_app</i>
            </div>
        </div>
    </div>
}
export default Header
