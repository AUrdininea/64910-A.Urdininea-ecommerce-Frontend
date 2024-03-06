
import coding from "../../assets/images/logos/coding.png";

export default function AboutUs() {
  return (
<>
<main className="main-container main-contact">
        <div className="">
          <img className='about-section' src={coding} alt="" />
            <div className="inner-container">
                <h1>Acerca de</h1>
                <p className="text">
                    Mi nombre es Andres Urdininea ,soy Full stack engineer experto en diseño web y puedo ayudarte a
                    crear una página web personalizada que muestre lo mejor de tu negocio,aumente tus ventas y tu
                    presencia en línea.
                </p>
                <div className="skills">
                    <span> web designe</span>
                    <span>Phoshop & Ilustrator</span>
                    <span>Coding</span>

                </div>
            </div>
        </div>
    </main>

    </>

  )
}
