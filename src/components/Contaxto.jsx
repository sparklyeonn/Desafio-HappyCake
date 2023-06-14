
export default function Navigation() {


    return (
      <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Correo</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="tucorreo@dominio.com"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Descripción</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      </>
      
    );

  }