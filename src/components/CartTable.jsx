
const CartTable = ({productos}) => {
  return (
    <table className="table-fixed w-full text-left whitespace-no-wrap">
        <thead>
            <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Nombre
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Precio Unitario
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Cantidad
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    P. final
                </th>
            </tr>
        </thead>
        <tbody>
            {productos ? productos.map((prod) => (
                <tr key={prod.id}>
                    <td className="border-t-2 border-gray-200 px-4 py-3">{prod.nombre}</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">{prod.precio} </td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">{prod.cantidad}</td>
                    <td className="border-t-2 border-gray-200 px-4 py-3">{(prod.cantidad * prod.precio).toFixed(2)}</td>
                </tr>
            )) : null }
        </tbody>

    </table>
  )
}

export default CartTable