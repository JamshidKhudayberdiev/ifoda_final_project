import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { postData } from '../../hooks/useFetch';
import axios from 'axios';

function Maxsulot_create() {
  const {empid} = useParams();
  const [name, namechange] = useState("");
  const [composition, compositionchange] = useState("");
  const [shortDescription, shortDescriptionchange] = useState("");
  const [description, descriptionchange] = useState("");
  const [type, typechange] = useState("");
  const [recommendedFlow, recommendedFlowchange] = useState("");
  const [usagePeriod, usagePeriodchange] = useState("");
  const [price, pricechange] = useState("");
  const [file, filechange] = useState("");
  const [msg, setMsg] = useState(null);
  const [progress, setProgress] = useState({started: false, pc: 0}); 
  const [url, urlchange] = useState("");
  const [title, titlechange] = useState("");
  const [active, activechange] = useState(false);
  const navigate = useNavigate();
  console.log(active);
  const handleSubmit = (e) => {
    e.preventDefault();
    const empdata = {categoryId:Number(empid), name, composition, shortDescription, description, type, recommendedFlow, usagePeriod, price, image:url, active };
    console.log(JSON.stringify({ ...empdata }));
    postData("http://94.141.76.204:8080/api/product/save", empdata,()=>{alert('Posted successful!'); navigate(`/Admin/Maxsulotlar/${empid}`)})
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
        <h2>Mahsulot qo'shish</h2>
        <div></div>
        <form onSubmit={handleSubmit}>
          <div className="input_field">
            <input
              required
              value={name}
              onChange={(e) => {
                namechange(e.target.value)
              }}
              type="text"
              placeholder="Mahsulot nomini kiriting"
              id="name"
            />
          </div>
          <div className="input_field">
            <input
              required
              value={composition}
              onChange={(e) => {
                compositionchange(e.target.value)
              }}
              type="text"
              placeholder="Mahsulot tarkibi"
              id="phone"
            />
          </div>
          <div className="input_field">
            <input
              required
              value={shortDescription}
              onChange={(e) => {
                shortDescriptionchange(e.target.value)
              }}
              type="text"
              placeholder="Mahsulot haqida qisqacha ma'lumot"
              id="address"
            />
          </div>
          <div className="input_field">
            <input
              required
              value={description}
              onChange={(e) => {
                descriptionchange(e.target.value)
              }}
              type="text"
              placeholder="Mahsulot haqida to'liq ma'lumot "
              id="address"
            />
          </div>
          <div className="input_field">
            <input
              required
              value={type}
              onChange={(e) => {
               typechange(e.target.value)
              }}
              type="text"
              placeholder="Mahsulot Turi"
              id="address"
            />
          </div>
          <div className="input_field">
            <input
              required
              value={recommendedFlow}
              onChange={(e) => {
                recommendedFlowchange(e.target.value)
              }}
              type="text"
              placeholder="Tavsiya etish"
              id="address"
            />
          </div>
          <div className="input_field">
            <input
              required
              value={usagePeriod}
              onChange={(e) => {
                usagePeriodchange(e.target.value)
              }}
              type="text"
              placeholder="Foydalanish Davri"
              id="address"
            />
          </div>
          <div className="input_field">
            <input
              required
              value={price}
              onChange={(e) => {
                pricechange(Number(e.target.value))
              }}
              type="number"
              placeholder="Mahsulot Narxi"
              
            />
          </div>
          <div className="input_field">
          <label  className="form-label">
            Rasm:
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
              <label>
                <p>Mahsulotni aktivlash</p>
              </label>
              <input
                value={active}
                onChange={(e) => {
                  activechange((prev) => !prev)
                }}
                type="checkbox"
                id="address"
              />
            </div>


          <div>
            <button className="create_btn" type="submit">
              Jonatish
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Maxsulot_create