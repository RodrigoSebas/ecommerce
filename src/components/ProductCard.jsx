import { useContext } from "react"; //para poder acceder a un contexto
import { CartContext } from "../context/cartContext"; //contexto en si
import { Link } from "react-router-dom";

const ProductCard = ({product}) => {
    const { addProductToCart} = useContext(CartContext);
     const {nombre, foto, descripcion, precio, id, categoria} = product;

  return (
    <div>
        <div className="bg-gray-200 p-4 rounded-md shadow-lg">
            <div className="bg-white rounded-md overflow-hidden shadow-lg max-w-md mx-auto relative">
                <img src={foto} className="w-full h-64 object-cover"/>
                <div className="absolute top-0 left-0 bg-blue-500 text-white p-2 text-sm font-semibold rounded-sm">
                    {categoria}
                </div>
            </div>
            <div className="p-4">
                <h4 className="text-md font-semibold mb-2">
                    {nombre}
                </h4>
                <p className="text-sm text-gray-800 mb-2 truncate">
                    {descripcion}
                </p>
                <span className="text-sm font-semibold text-blue-600">
                    S/ {precio}
                </span>
                <div className="flex justify-end pt-2">
                    <button className="bg-blue-600 text-white hover:bg-blue-500 rounded-l-md px-2 py-1"
                    onClick={() => {
                        addProductToCart(product);
                    }}>
                        <i className="fa-solid fa-cart-plus"></i>
                    </button>

                    <Link to={`/product/${id}`} className="bg-sky-800 text-white hover:bg-sky-700 rounded-r-md px-2 py-1">
                        <i className="fa-solid fa-eye"></i>
                    </Link>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard