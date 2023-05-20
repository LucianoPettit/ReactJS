import { useEffect } from "react";

import { withProductsData } from "./withProductsData";
import Contacto from "../../components/Contacto/Contacto";

const Nosotros = ({ productos, loading }) => {
  const clickear = () => {
    console.log("click");
  };

  useEffect(() => {
    window.addEventListener("click", clickear);

    return () => {
      window.removeEventListener("click", clickear);
    };
  }, []);

  return (
    <div className="container my-5">
      <h2>Bienvendio a Digital PBS</h2>
      <p>
        {" "}
        En Digital PBS contamos con gran variedad de equipos, líquidos,
        repuestos y accesorios. <br />
        <br /> Ya sea que estés comenzando el mundo del vapeo o ya vayas
        avanzado en el tema, contamos con lo necesario para satisfacer tus
        necesidades.
        <br />
        <br /> Todos nuestros productos son originales y trabajamos con las
        mejores marcas. Además, llegamos a TODO el país! ¿Que estás esperando
        para comunicarte y recibir asesoramiento?
      </p>
      <h3>Podes comunicarte completando el siguiente formulario!</h3>
      <hr />
      <Contacto />
    </div>
  );
};

export default withProductsData(Nosotros);
