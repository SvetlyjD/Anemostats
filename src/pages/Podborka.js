import { Row } from "react-bootstrap";
import { podborka } from "../Utils/constGoods";
import PodborkaItem from "./PodborkaItem";

function Podborka() {

    return (

        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <div className="podborkaHeader" > ДИЗАЙНЕРСКИЕ СТЕКЛЯННЫЕ АНЕМОСТАТЫ AIRGLASS ДЛЯ ПРИТОЧНЫХ И ВЫТЯЖНЫХ СИСТЕМ ВЕНТИЛЯЦИИ </div>
            <Row className="d-flex">
                <div className="podborkaTov">
                    {podborka.map(item =>
                        <PodborkaItem key={item.name} imgUrl={item.imgUrls} name={item.name} count={item.count} type={item.type}></PodborkaItem>
                    )}
                </div>
            </Row>
        </div>
    );
}

export default Podborka;