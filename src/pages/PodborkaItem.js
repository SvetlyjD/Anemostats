import { useState } from "react";

function PodborkaItem(props) {

    const { imgUrl, name, count } = props;
    let l = Object.entries(imgUrl).length;
    console.log(l);

    let [c, setC] = useState(1);
    const nextFunc = () => {
        if (c !== l - 1) { setC(c + 1) }
        else if (c === l - 1) { setC(0) }
        console.log(c);
    }
    const backFunc = () => {
        if (c !== 0) { setC(c - 1) } else { setC(l - 1) }
        console.log(c);
    }

    return (
        <>
            <div className="podborkaItem">

                <div>{name}</div>
                {Object.keys(imgUrl).map((item, index) => {
                    return (
                        <div key={item} className="podborkaItemSlide">
                            <div className={index === c ? "sliderActiv" : "sliderNone"}>
                                <img src={imgUrl[item]} alt="" />
                            </div>
                        </div>
                    )
                }
                )}
                <div>Цена: {count}</div>
                <button className="btnBack" onClick={() => backFunc()}>back</button>
                <button className="btnNext" onClick={() => nextFunc()}>next</button>
            </div>

        </>
    );
}

export default PodborkaItem;