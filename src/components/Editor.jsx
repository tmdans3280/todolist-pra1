import "./Editor.css"
import { useState , useRef} from "react";

const Editor =({onCreate})=>{
 
    const [content,setContent] =useState("");
    const contentRef=useRef();
    
    const onChangeInput = (e)=> {
        setContent(e.target.value);
    }

    const onKeyDown=(e)=>{
        if(e.keyCode===13){
            onClickBtn();
        }
    }    

    const onClickBtn= ()=>{
        if(content===""){
            contentRef.current.focus();
            return;
        }
        onCreate(content)
        setContent("")
    }

    return (
        <div className="Editor">
            <input 
                onKeyDown={onKeyDown}
                ref={contentRef}
                value={content}
                onChange={onChangeInput}
                placeholder="새로운 Todo.." 
                type="text" />
            <button onClick={onClickBtn}>추가</button>
        </div>
    )
}

export default Editor;