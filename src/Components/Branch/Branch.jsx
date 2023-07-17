import "./branch.css";
import { Link, useParams } from "react-router-dom";
import {useFetch} from "../../hooks/useFetch";
import Branch_list from "./Branch_list";

function Branch() {
  const {empid} = useParams()
  const {data, isPending, error} = useFetch('http://94.141.76.204:8080/api/branch/all-by-region?regionId=' + empid )
  
  return (
    <div className="branch_container">
      <div className="btn_container">
        <Link to="/Admin" className="branch_btn">
          Asosiy menu
        </Link>
        <h1 className='header_title'>Filiallar</h1>
        <Link to={"/Admin/branch_create/" + empid}  className="branch_btn">
          Filial Qo'shish
        </Link>
      </div>
      <div className="branch_list">
        {isPending && <div className='loading'>Loading....</div>}
    {error && <div className='loading'>{error}</div>}
        {data && <Branch_list data={data} />}
      </div>
    </div>
  );
}

export default Branch;
