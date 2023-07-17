import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const useFetch = (url, method = "GET", item = '') =>  {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)


    useEffect(() => {
        const fethUrl = async () =>{
            setIsPending(true)
            setError(null) 
            try{
                const req = await axios({method: method, url: url, data: item},{mode: "cors"},{"Content-type":"application/json",
                "Accept": "application/json",
                "Authorization": "aWZvZGE6aWZvZGE=",
                
                }).then((res)=>{
                    setData(res.data)
                })

                
                setIsPending(false)
            }catch(err) {
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            }
        }
        fethUrl()
    }, [url])

    return{data,isPending,error}
}
// export default useFetch;

export function postData(url, item,callback){
    axios
    .post(url, {...item}, {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic aWZvZGE6aWZvZGE=",
        },
    })
    .then((res) => {
       console.log(res)
    }).then(() => {
        callback()
    })
    .catch((err) => {
        console.log(err)
    });
}

export function deleteData(url, callback){

    axios
    .delete(url, {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic aWZvZGE6aWZvZGE=",
        },
    })
    .then((res) => {
        console.log(res)
        callback()
    })
    .catch((err) => {
        console.log(err)
    });
    
}

export function postUrl(url,item){
   
    
 }