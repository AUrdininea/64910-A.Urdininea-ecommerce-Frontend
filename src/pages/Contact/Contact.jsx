export default function Contac() {
  return (
    <>
    <main className="main-container">

<div className="section-contact">

    <div className="contact-form-container">

        <h1 className="contact-title">Formulario Contacto</h1>
       
        <form className="contact-form" action="">
            <div className="input-wrapper">
                <label htmlFor="fullname">Nombre Completo</label>
                <input type="text" name="fullname" id="fullname" required min="5" max="80"/>
            </div>

            <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required min="5" max="80"/>
            </div>

            <div className="input-wrapper">
                <label htmlFor="message">Mesagge</label>
                <textarea name="message" id="message" rows="4" required minLength="10"
                    maxLength={400}></textarea>
            </div>

            <div className="input-wrapper ">
                <button type="submit">Enviar</button>
            </div>
        </form>
    </div>


    <div className="contact-map contenedor">

        <iframe className="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.568023255334!2d-64.162593888593!3d-31.398472574162756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432980f8918cbf3%3A0xf1388ff9a497e36e!2sPadre%20Luis%20Monti%202166%2C%20X5004ENP%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1693095774298!5m2!1ses!2sar"
            width="100%" height="100%"  allowFullScreen="" loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" name="iframe_a">

        </iframe>
    </div>

</div>



</main>
    
    </>
  )
}