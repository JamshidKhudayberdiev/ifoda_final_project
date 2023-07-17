import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteData, postData } from "../../hooks/useFetch";
import axios from "axios";

function Maxsulotlar_edit() {
  const { empid } = useParams();
  const navigate = useNavigate();

  const Removefunction = (empid) => {
    if (window.confirm("Do you want to remove?")) {
      const res = deleteData(
        `http://94.141.76.204:8080/api/product/delete/${empid}`,
        () => {
          navigate("/Admin/Category");
        }
      );
      console.log(res);
    }
  };

  const [product, setProduct] = useState(null);
  const [file, filechange] = useState("");
  const [msg, setMsg] = useState(null);
  const [progress, setProgress] = useState({started: false, pc: 0}); 
  const [url, urlchange] = useState("");
  const [title, titlechange] = useState("");
  const [description, descriptionchange] = useState("");
  useEffect(() => {
    fetch("http://94.141.76.204:8080/api/product/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        console.log(resp);
        const {
          id,
          categoryId,
          active,
          composition,
          description,
          image,
          name,
          price,
          recommendedFlow,
          shortDescription,
          type,
          usagePeriod,
        } = resp;
        setProduct({
          id,
          categoryId,
          active,
          composition,
          description,
          image,
          name,
          price,
          recommendedFlow,
          shortDescription,
          type,
          usagePeriod,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = {
      active: product.active,
      id: product.id,
      categoryId: product.categoryId,
      composition: product.composition,
      description: product.description,
      image: product.image,
      name: product.name,
      price: product.price,
      recommendedFlow: product.recommendedFlow,
      shortDescription: product.shortDescription,
      type: product.type,
      usagePeriod: product.usagePeriod,
    };

    postData("http://94.141.76.204:8080/api/product/save", empdata, () => {
      alert("Revomed successfully");
      navigate("/Admin/Maxsulotlar/" + empdata.regionId);
    });
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




  if (product) {
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
                value={product.name}
                onChange={(e) => {
                  setProduct((prev) => {
                    return { ...prev, name: e.target.value };
                  });
                }}
                type="text"
                id="name"
              />
            </div>
            <div className="input_field">
              <input
                value={product.composition}
                onChange={(e) => {
                  setProduct((prev) => {
                    return { ...prev, composition: e.target.value };
                  });
                }}
                type="text"
                id="phone"
              />
            </div>
            <div className="input_field">
              <input
                required
                value={product.shortDescription}
                onChange={(e) => {
                  setProduct((prev) => {
                    return { ...prev, shortDescription: e.target.value };
                  });
                }}
                type="text"
                placeholder="Mahsulot haqida qisqacha ma'lumot"
                id="address"
              />
            </div>
            <div className="input_field">
              <input
                required
                value={product.description}
                onChange={(e) => {
                  setProduct((prev) => {
                    return { ...prev, description: e.target.value };
                  });
                }}
                type="text"
                placeholder="Mahsulot haqida to'liq ma'lumot "
                id="address"
              />
            </div>
            <div className="input_field">
              <input
                required
                value={product.type}
                onChange={(e) => {
                  setProduct((prev) => {
                    return { ...prev, type: e.target.value };
                  });
                }}
                type="text"
                placeholder="Mahsulot Turi"
                id="address"
              />
            </div>
            <div className="input_field">
              <input
                required
                value={product.recommendedFlow}
                onChange={(e) => {
                  setProduct((prev) => {
                    return { ...prev, recommendedFlow: e.target.value };
                  });
                }}
                type="text"
                placeholder="Tavsiya etish"
                id="address"
              />
            </div>
            <div className="input_field">
              <input
                required
                value={product.usagePeriod}
                onChange={(e) => {
                  setProduct((prev) => {
                    return { ...prev, usagePeriod: e.target.value };
                  });
                }}
                type="text"
                placeholder="Foydalanish Davri"
                id="address"
              />
            </div>
            <div className="input_field">
              <input
                required
                value={product.price}
                onChange={(e) => {
                  setProduct((prev) => {
                    return { ...prev, price: Number(e.target.value) };
                  });
                }}
                type="number"
                placeholder="Mahsulot Narxi"
              />
            </div>
            <div className="input_field">
          <label  className="form-label">
            Rasm:
          </label>
          <input     onChange={e=>{filechange(e.target.files[0])}}
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
                
                value={product.active}
                onChange={(e) => {
                  setProduct((prev) => {
                    return { ...prev, active: e.target.value };
                  });
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
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default Maxsulotlar_edit;
