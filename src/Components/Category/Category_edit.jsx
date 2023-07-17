import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteData, postData } from "../../hooks/useFetch";
import axios from "axios";

function Category_edit() {
  const { empid } = useParams();
  const navigate = useNavigate();

  const Removefunction = (empid) => {
    if (window.confirm("Do you want to remove?")) {
      const res = deleteData(
        `http://94.141.76.204:8080/api/category/delete/${empid}`,
        () => {
          navigate("/Admin/category/");
        }
      );
      console.log(res);
    }
  };

  useEffect(() => {
    fetch("http://94.141.76.204:8080/api/category/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        idchange(resp.id);
        namechange(resp.name);
        setLogo(resp.logo);
        colorchange(resp.color);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [logo, setLogo] = useState(null);
  const [color, colorchange] = useState("");
  const [active, activechange] = useState(false);
  const [file, filechange] = useState("");
  const [url, urlchange] = useState("");
  const [msg, setMsg] = useState(null);
  const [progress, setProgress] = useState({started: false, pc: 0}); 
  const [title, titlechange] = useState("");
  const [description, descriptionchange] = useState("");


  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = { id, name, logo:url, color, active };

    postData("http://94.141.76.204:8080/api/category/save", empdata, () => {
      alert("Revomed successfully");
      navigate("/Admin/Category");
    });
  };

  const logochange = (e) => {
    const selectedFile = e.target.files;
    if (selectedFile) {
      setLogo(selectedFile);
    } else {
      setLogo(null);
    }
  };
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
      <div className="wrapper">
        <div className="wrapper_header_section">
          <h2>O'zgartirish</h2>
          <button
            onClick={() => {
              Removefunction(empid);
            }}
            className="delete_btn"
          >
            O'chirish
          </button>
        </div>
        <form onSubmit={handlesubmit}>
          <div className="input_field">
            <input
              required
              value={id}
              onChange={(e) => {
                idchange(e.target.value);
              }}
              type="number"
              placeholder="Id"
              id="id"
            ></input>
          </div>
          <div className="input_field">
            <input
              required
              value={name}
              onChange={(e) => {
                namechange(e.target.value);
              }}
              type="text"
              placeholder="Name"
              id="name"
            />
          </div>
          <div className="input_field">
            <input
              required
              value={color}
              onChange={(e) => {
                colorchange(e.target.value);
              }}
              type="color"
              placeholder="Name"
              id="name"
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
          </div>
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
          <div>
            <button className="create_btn" type="submit">
              Saqlash
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Category_edit;
