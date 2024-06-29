import CartTable from "../components/CartTable";
import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import { useForm } from "react-hook-form";
import Map from "../components/Map";
import useAxios from "../hooks/useAxios";
//import usePost from "../hooks/usePost";
import axiosPost from "../hooks/axiosService";

const CartView = () => {
  //const URL = import.meta.env.VITE_ENDPOINT_BASE;
  const URL = `${import.meta.env.VITE_ENDPOINT_BASE}/ventas`;
  const { cart } = useContext(CartContext);

  //const [startSubmit, setStartSubmit] = useState(false)

  const [venta, setVenta] = useState(null)

  const [positionMarker, setPositionMarker] = useState(null);

  const { register, handleSubmit, formState: {errors} } = useForm();

  //const {data, error, fetchData} = usePost(URL, {method: "post", venta})
  //console.log(data);



  const handleCheckout = async (info) => {
    const [latitud, longitud] = positionMarker;

    const nuevaVenta = {productos:cart, fecha:Date.now(),
      nombre_cliente: info.nombreCompleto,
      telefono_cliente: info.telefono,
      direccion_cliente: info.direccion,
      dni_cliente: info.dni,
      latitud: latitud,
      longitud: longitud,

    }

    try {
      const res = await axiosPost(URL, {method: "POST", data:nuevaVenta});
      console.log(res)
    } catch (error) {
      console.log(error)
    }

    //setVenta(nuevaVenta);
    //setStartSubmit(true);
    //fetchData();
    
  };

  return (
    <div className="flex justify-between gap-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="lg:w-1/2 w-full">
        <h2 className="mb-3 text-2xl font-bold p-2 mt-5">Resumen compra</h2>
        <CartTable productos={cart} />
      </div>
      <div className="lg:w1/2 w-full">
        <h2 className="mb-3 text-2xl font-bold p-2 mt-5">Confirmar compra</h2>

        <form onSubmit={handleSubmit(handleCheckout)}>
          <div className="mb-3">
            <label className="text-sm font-semibold mb-1 text-gray-600 block">
              Nombre completo:
            </label>
            <input
              className="p-2 h-10 w-full border-2 border-gray-300 rounded block"
              {...register("nombreCompleto",{required:true, minLength:6})}
            />
            
            {errors.nombreCompleto?.type ==="required" && <p className="text-sm text-red-500 font-semibold my-2">Este campo es requerido</p>}
            {errors.nombreCompleto?.type ==="minLength" && <p className="text-sm text-red-500 font-semibold my-2">Este campo requiere minimo 6 caracteres</p>}

          </div>

          <div className="mb-3">
            <label className="text-sm font-semibold mb-1 text-gray-600 block">
              Telefono:
            </label>
            <input
              className="p-2 h-10 w-full border-2 border-gray-300 rounded block"
              {...register("telefono", {minLength:6})}
            />
            {errors.telefono?.type ==="minLength" && <p className="text-sm text-red-500 font-semibold my-2">Este campo requiere minimo 6 caracteres</p>}
          </div>

          <div className="mb-3">
            <label className="text-sm font-semibold mb-1 text-gray-600 block">
              Direccion:
            </label>
            <input
              className="p-2 h-10 w-full border-2 border-gray-300 rounded block"
              {...register("direccion",{required:true})}
            />

          </div>

          <div className="mb-3">
            <label className="text-sm font-semibold mb-1 text-gray-600 block">
              DNI:
            </label>
            <input
              className="p-2 h-10 w-full border-2 border-gray-300 rounded block"
              {...register("dni",{required:true})}
            />

          </div>
          <Map positionMarker={positionMarker} setPositionMarker={setPositionMarker}/>

          <button
            className="px-4 py-3 bg-sky-600 text-white font-semibold rounded"
            type="submit"
          >
            Confirmar compra
          </button>
        </form>
      </div>
    </div>
  );
};

export default CartView;


