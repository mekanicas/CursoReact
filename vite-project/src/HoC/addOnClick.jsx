export const addOnclick = (WrappedComponent, text = "Bienvenidos") => {

    const handleClick = () => {
        alert("Hola Desde HoC")
    }
 
    const AddOnclickComponent = () => {
        return <WrappedComponent onClick={handleClick} text={text} />;
    }
    return AddOnclickComponent

}