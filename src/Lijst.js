import Foto from "./Foto";
import "./Lijst.css";

const Lijst = (props) => {
  return (
          <div>
            <h2> {props.title} </h2>
            <div className="lijst">
              <Foto picture="/img/foto--1.jpg"/>
              <Foto picture="/img/foto--2.jpg"/>
              <Foto picture="/img/foto--3.jpg"/>
              <Foto picture="/img/foto--4.jpg"/>
              <Foto picture="/img/foto--5.jpg"/>
              <Foto picture="/img/foto--6.jpg"/>
            </div>
          </div>
  );
}

export default Lijst;
