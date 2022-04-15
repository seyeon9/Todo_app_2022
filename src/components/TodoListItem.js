import React from 'react';
import classNames from 'classnames'; // 조건부 스타일링
import { MdCheckBox, MdRemoveCircleOutline, MdCheckBoxOutlineBlank } from "react-icons/md";
import '../styles/TodoListItem/scss';

function TodoListItem({todo}){
    const{id, text, checked } = todo;

    return (
    <div className='TodoListItem'>
        <div className={classNames('Checkbox',{checked})}>
            {checked ? <MdCheckBox /> :<MdCheckBoxOutlineBlank />}
            <div className='text'>{text}</div>
        </div>
        <div className='remove'>
            <MdRemoveCircleOutline />
        </div>
    </div>
    )
}

export default TodoListItem