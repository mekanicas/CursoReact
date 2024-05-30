import "./ItemCount.css"
import { useCount } from "../hooks/useCount"

export const ItemCount = ({stock}) => {
    const {count, decrement, increment, addToCart} = useCount(stock)

    return(
        <div className="container--itemCount">
            <div className="container--itemCount--buttons">
            <button className="itemCount--button" onClick={decrement}> - </button>
            <div className="itemCount--button" onClick={count}> + </div>
            <button className="itemCount--button" onClick={increment}> + </button>
            </div> 
            <button onClick={addToCart} className="itemCount--buttonCart">
                Add To cart
            </button>
        </div>
    )
}