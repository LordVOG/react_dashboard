import React from "react";
import "./product.css";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import {productData} from '../../DummyData'

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Active User" title="Sales Performance"/>
        </div>
        <div className="productTopRight">
			<div className="productInfoTop">
				<img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productInfoImg" />
			</div>
			<div className="productInfoBottom"></div>
		</div>
      </div>
      <div className="productBottom"></div>
    </div>
  );
}
