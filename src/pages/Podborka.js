import { podborka } from "../Utils/constGoods";
import PodborkaItem from "./PodborkaItem";

function Podborka() {

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <div className="podborkaHeader" > ДИЗАЙНЕРСКИЕ СТЕКЛЯННЫЕ АНЕМОСТАТЫ AIRGLASS ДЛЯ ПРИТОЧНЫХ И ВЫТЯЖНЫХ СИСТЕМ ВЕНТИЛЯЦИИ </div>
            <div className="podborkaTov">
                {podborka.map(item =>
                    <PodborkaItem key={item.name} imgUrl={item.imgUrls} name={item.name} count={item.count}></PodborkaItem>
                )}
            </div>
        </div>
    );
}

export default Podborka;