import "./TodoItem.css";


const TodoItem =({id,content,isDone,date,onUpdate,onDelete})=>{
  
    const onChangeisDone =()=>{
        onUpdate(id)
    }
    
    const onClickBtn=()=>{
        onDelete(id)
    }

    return (
        <div className="TodoItem">
           
                <input
                    onChange={onChangeisDone}
                    checked={isDone}
                    type="checkbox"/>
                <h4 className="item">{content}</h4> 
                <h4 className="date">{new Date(date).toLocaleDateString()}</h4>
                <button onClick={onClickBtn}>삭제</button>
          
        </div>
    )
}

export default TodoItem;