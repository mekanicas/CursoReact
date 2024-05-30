import { TwitterFollowCard } from "./TwitterFollowCard";
import {Button} from "./HoC/Button";
import {Producto} from "./RenderProps/Producto"
import { addOnclick } from "./HoC/addOnClick";
import { modificarProducto } from "./RenderProps/modificarProducto";

export function App (){ 

    const ButtonHoC = addOnclick(Button, "Hola")
    const ProductoModificado = modificarProducto(Producto)
    
    return(
        <section className="App">
        {/* <TwitterFollowCard userName="mekanicas">
            Bruno Miceli
        </TwitterFollowCard>
        <TwitterFollowCard userName="midudev">  
            Miguel Ángel Duran
        </TwitterFollowCard> */}
        {/* <Button />
        <ButtonHoC /> */}
        <Producto nombre={"Producto 1"} precio={1000} />
        <ProductoModificado nombre={"Producto 2"} precio={1000} />
        </section>
    )
}