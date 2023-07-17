import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {postData} from '../../hooks/useFetch'
import axios from "axios";

function Category_create() {
  const [name, namechange] = useState("");
  const [color, colorchange] = useState("");
  const [file, filechange] = useState("");
  const [title, titlechange] = useState("");
  const [description, descriptionchange] = useState("");
  const [url, urlchange] = useState("");
  const [msg, setMsg] = useState(null);
  const [active, activechange] = useState(false)
  const [progress, setProgress] = useState({started: false, pc: 0}); 
  const navigate = useNavigate();
 
  
  
  const handlesubmit = (e) => {
      e.preventDefault();
      const empdata = { name, color,logo:url, active}   
      console.log(empdata)
      postData("http://94.141.76.204:8080/api/category/save",empdata,()=>{alert('Revomed successfully');navigate('/Admin/category')})
  }

    
    function handleUpload   () {

        if(!file){
          setMsg('No file selected!');
          return;
        }
        console.log(file)
        const fd = new FormData();
        fd.append('file', file)
        fd.append('title', title)
        fd.append('description', description)
        setMsg('Uploading....');
        setProgress(prevState =>{
          return {...prevState, started:true} 
        })
         axios.post('http://94.141.76.204:8080/api/file/upload' ,fd,{
        onUploadProgress: (progressEvent) => {setProgress(prevState => {
          return {...prevState, pc : progressEvent.progress*100}
        })},
        headers: {
          'Content-Type' : 'multipart/form-data',
            'Custom-Header' : 'value',
            "Authorization": "aWZvZGE6aWZvZGE=",
            "Accept": "*/*",
            
            } 
    }).then(res =>{setMsg('Uploading successful'); urlchange(res.data.url);
    }).catch(err =>{setMsg('Upload failed'); console.log(err.message)
    })
    }
    




  return (
    <div>
      <form onSubmit={(e)=>{handlesubmit(e)}}>
        <div className="form-group">
          <label   className="form-label">
            Yangi Kategoriya:
          </label>
          <input required value={name} onChange={e=>{namechange(e.target.value)}}
            type="text"
            id="name"
            name="name"
            className="form-input"
          ></input>
        </div>
        <div className="form-group">
        <label >Color:</label>
      <input 
        onChange={e=>{colorchange(e.target.value)}}
        type="color"
        id="color"
        name="color"
        value={color}
      />
          

        </div>
        <div className="form-group">  
          <label  className="form-label">
            Logo:
          </label>
          <input  required   onChange={e=>{filechange(e.target.files[0])}}
            type="file"
            id="logo"
            name="logo"
            className="form-input"
          ></input>
          {progress.started && <progress max='100' value={progress.pc}></progress>}
          {msg && <span>{msg}</span>}
          <div className="uplButton" onClick={handleUpload}>Upload</div>
          <div className="input_field">
          <input
              
              value={active}
              onClick={() => {
                activechange((prev)=>!prev);
              }}
              type="checkbox"
              placeholder="Name"
              id="check"
            />
            <label htmlFor='check' className='active_label'>Activlashrish</label>
          </div> 
        </div>
        <button type="submit" value="Submit" className="form-submit">Submit</button>
      </form>
    </div>
  );
}

export default Category_create;
