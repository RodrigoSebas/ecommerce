import ListProducts from "../components/ListProducts";
import useAxios from "../hooks/useAxios";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import { filterByPrice, orderByName } from "../functions/dataFunctions";
import Carousel from "../components/Carousel";

const AllProductView = () => {
  const URL = import.meta.env.VITE_ENDPOINT_BASE;

  const { data, error, loading } = useAxios(`${URL}/productos`);

  const [prices, setPrices] = useState([1, 1000]);
  const [orderBy, setOrderBy] = useState("asc");

  const handleSlider = (event, newValues) => {
    setPrices(newValues);
  };

  let productsFiltered = data;
  if (data) {
    productsFiltered = filterByPrice(data, prices);
    productsFiltered = orderByName(productsFiltered, orderBy);
  }

  return (
    <div className="mt-6">
      <div className="grid grid-cols-3 grid-rows-2 gap-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 max-h-96">
        <div className="col-span-2 row-span-2">
          <Carousel />
        </div>
        <div className="col-span-1 col-start-3 row-span-1">
          <img src="https://concepto.de/wp-content/uploads/2021/07/mono-e1626908813287.jpg" className="object-cover w-full h-full"/>
        </div>
        <div className="col-span-1 col-start-3 row-span-1 row-start-1">
          <img src="https://concepto.de/wp-content/uploads/2021/07/mono-e1626908813287.jpg" className="object-cover w-full h-full"/>
        </div>
      </div>
      <div className="flex justify-between gap-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 md:flex-row flex-col">
        <div className="lg:w-1/4">
          <h2 className="font-semibold text-lg mb-3">Filtros</h2>
          <div className="mb-2">
            <h3 className="font-semibold mb-2"> FIltrar por precio</h3>
            <Slider value={prices} onChange={handleSlider} min={1} max={1000} />
          </div>
          <div className="mb-2">
            <h3 className="font-semibold mb-2">Ordenar</h3>
            <select
              className="p-2 border-2 border-gray-400 rounded"
              value={orderBy}
              onChange={(e) => setOrderBy(e.target.value)}
            >
              <option value="asc">Ascendente</option>
              <option value="des">Descendente</option>
            </select>
          </div>
        </div>
        <div className="lg:w-3/4 w-full">
          <ListProducts products={productsFiltered} />
        </div>
      </div>
    </div>
  );
};

export default AllProductView;
