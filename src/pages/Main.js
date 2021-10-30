import { useEffect } from "react";
import { useState } from "react";
import Carusel from "./Carusel";
import Podborka from "./Podborka";
import { podborka } from "../Utils/constGoods";

function Main() {
  const carusel = [
    {
      id: 1,
      title: "1",
      img: "https://z-plus.ru/wa-data/public/shop/products/82/19/1982/images/164886/164886.580@2x.jpg"
    },
    {
      id: 2,
      title: "2",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKvvmLM_SJ09xIUZAxI_XGj4Rb8N8OAiUDw&usqp=CAU"
    },
    {
      id: 3,
      title: "3",
      img: "data:image/jpeg;base64,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"
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
    <div className="Main">
      <div className="caruselContainer" >
        <div className="caruselC" style={{ marginLeft: current * 90 - 180 + "px" }}>
          {carusel.map(item =>
            <Carusel key={item.id} title={item.title} img={item.img} currentItem={current}></Carusel>
          )
          }
        </div>
      </div>
      <div className="podborkaTov">
        {podborka.map(item =>
          <Podborka key={item.imgUrls.imgUrl1} name={item.name} count={item.count} imgUrls={item.imgUrls}></Podborka>)}
      </div>
    </div >
  );
}

export default Main;
