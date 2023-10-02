import React from "react";
import "./product.table.scss";

const ProductTable = () => {
	const requestedProducts = [
		{ product: "Iphone13", requests: "46 times" },
		{ product: "AIRpods", requests: "36 times" },
		{ product: "PS5", requests: "25 times" },
		{ product: "Xbox", requests: "18 times" },
		{ product: "Macbook", requests: "12 times" },
	];

	return (
		<div className="product-table">
			<h4>Top requested product from customers</h4>

			{requestedProducts.map((item, index) => (
				<div className="table-container" key={index}>
					<p> {item.product}</p>
					<p className="requests"> {item.requests}</p>
				</div>
			))}
		</div>
	);
};

export default ProductTable;
