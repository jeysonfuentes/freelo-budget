import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

function Aside(props: any) {
  return (
    <aside>
      <div>
        <div>
          <Image src={"https://via.placeholder.com/130"} alt={"avatar image"} width="100" height="100"/>
        </div>
        <div>
          <p>Jeyson Fuentes</p>
        </div>
      </div>
      <div>
        <div>
          <h4>Gestión</h4>
          <ul>
            <li>
              <div>
                <i className=""></i>
              </div>
              <div>
                <p>Proyectos</p>
                <p>4 en el ultimo mes</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}



export default Aside;
