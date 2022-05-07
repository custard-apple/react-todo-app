import React, { useState } from 'react'

const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc ) {
            alert("Title or desc dcan't be empty");
        } else {
            props.addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
        
    }
    return (
        <div className='container my-3'>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input type="input" className="form-control" id="title" aria-describedby="emailHelp" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <input type="input" className="form-control" id="desc" value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>
                </div>
                <button type="submit" className="btn btn-primary btn-success">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
