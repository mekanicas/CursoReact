export const modificarProducto = (ComponenteRecibido) => {
    return function cambioPrecio({nombre, precio}){
        let nuevoPrecio = precio + 500;

        return <ComponenteRecibido precio={nuevoPrecio} nombre={nombre} />
     }
}