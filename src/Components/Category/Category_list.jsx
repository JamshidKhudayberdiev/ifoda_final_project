import React from "react";
import { TiPencil } from "react-icons/ti";
import { Link} from "react-router-dom";

function Category_list({data}) {

  return (
    <div className="Category">
      {data.map((data) => {
        const { id, name, color, logo } = data;

        return (
          <div className="category_card" key={id}>
            <div className="category_header">
              <h2>{name}</h2>
              <Link to={"/Admin/CategoryEdit/" + id} data={data}>
                <TiPencil className="branch_icon" />
              </Link>
            </div>
            <div className="category_content">
              <div className="field">
                <strong>ID:</strong> {id}
              </div>
              <div className="field">
                <strong>Name:</strong> {name}
              </div>
              <div className="field">
                <strong >Color:</strong><span className="color_span" style={{ backgroundColor: color }}></span>
              </div>
              <div className="field field_last">
                <strong>Logo:</strong> <img alt="Logo uchun joy" className="category_img"  src={logo}></img>
              </div>

              <Link to={'/Admin/Maxsulotlar/' + id} className="branch_list_btn">
                Cateforiyaga Kirish
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Category_list;
