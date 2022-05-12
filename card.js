function Abc(props) {
    return <>
        <div className="divEdit">
            <h1>{props.titles}</h1>
            <p>{props.desc}</p>
           <div> <img src={props.imG} /></div>
            <h2 className="pricedollar">{props.prices}</h2>
            <div className="sizenquantity"><p><b>Size: </b>{props.sizes}</p><p><b>Quantity: </b>{props.quant}</p></div>
            <button className="btn" onClick={props.action}>Add to Cart</button>
        </div>
    </>
}

export default Abc;