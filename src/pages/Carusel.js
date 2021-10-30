function Carusel(props) {
    let { title, img } = props
    return (
        <div className="caruselItem">
            {title}
            <img src={img} alt="anemostat" className="caruselImg" />
        </div>
    );
}

export default Carusel;