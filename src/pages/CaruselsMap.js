import { useEffect } from "react";
import { useState } from "react";

import Carusel from "./Carusel";

function CaruselsMap() {
    const carusel = [
        {
            id: 1,
            title: "1",
            img: "product/airg-kvadrat-fiolet-2.jpg"
        },
        {
            id: 2,
            title: "2",
            img: "product/airg-kvadrat-fiolet-2.jpg"
        },
        {
            id: 3,
            title: "3",
            img: "product/airg-kvadrat-fiolet-2.jpg"
        }
    ]


    const [current, setCurrent] = useState(0);
    useEffect(() => {
        // Запускаем интервал
        setInterval(() => {
            // Меняем состояние
            setCurrent((current) => {
                // Вычисляем индекс следующего слайда, который должен вывестись
                const res = current === length - 1 ? 0 : current + 1
                // Возвращаем индекс
                return res
            })
        }, 3000)
        // Выключаем интервал
        return () => clearInterval()
    }, [])

    if (!Array.isArray(carusel) || carusel.length <= 0) {
        return null
    }
    const length = carusel.length;


    return (
        <div className="d-flex">
            <div className="caruselContainer" >
                <div className="caruselC" style={{ marginLeft: current * 360 - 720 + "px" }}>
                    {carusel.map(item =>
                        <Carusel key={item.id} title={item.title} img={item.img} currentItem={current}></Carusel>
                    )
                    }
                </div>
            </div>
        </div>
    );
}

export default CaruselsMap;