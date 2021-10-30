function Podborka(props) {
    const { name, count, imgUrls } = props
    return (
        <div className="podborkaItem">
            <button>back</button>
            {console.log(imgUrls)}

            <button>next</button>
        </div>
    );
}

export default Podborka;