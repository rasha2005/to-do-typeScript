type Button = {
    title : string;
    className? : string;
    onClick?: () => void;
}


const Button = ({title ,className , onClick} : Button) => {
    return (
        <>
              <button onClick={onClick}
              className= {className} type="submit">
                 {title}
                 </button>

        </>
    )
}

export default Button ;