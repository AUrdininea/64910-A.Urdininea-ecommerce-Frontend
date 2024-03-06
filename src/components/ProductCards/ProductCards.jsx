import defaultPicture from "../../assets/images/product-detail/default-product.png"
const URL = import.meta.env.VITE_SERVER_URL;


export default function ProductCards({ product }) {
	return (
		<> 
		
		<div className="card-container  ">
			<article className="card" key={product._id}>
				<div className="imgBx">
					<img src={product.image ? `${URL}/images/products/${product.image}`
					 : defaultPicture} alt="" className="box-img" loading="lazy" />
					
				</div>
				
					<div className="card-info card-description">
						<h2 className="card-info-title">{product.producto} </h2>
						<p className="card-info-text">{product.descripcion}</p>
					</div>
					<div className="card-values">
						<div className="card-date"> {product.fecha} </div>
						<div className="card-price">${product.precio} </div>
					</div>

					<footer className="card-footer">
						<a href="#" className="card-button">
							Ver más
						</a>
						<button className="card-btn">Comprar</button>
					</footer>
				
			</article>

			</div>
	
		</>
	);
}
