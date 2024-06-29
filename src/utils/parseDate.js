const convertDateToLocal = (fechaYHora, zonaHoraria="es-ES") => {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    
    const fecha = new Date(fechaYHora);
    return fecha.toLocaleDateString(zonaHoraria, options);
}

export default convertDateToLocal;