import Container from '../components/Container'
import Head from 'next/head'

const PropietarioJ=()=>{
    return(
        <Container>
            <Head>
                <title>Propietario Jurídico</title>
            </Head>
            <hr></hr>
            <div className="container mt-4 mr-5">
                <div className="abs-center">
                    <div className="col-lg-5">
                         <div className="card shadow-lg p-3 mb-5 bg-white">
                              <div className="card-header mx-auto">PROPIETARIO JURÍDICO</div>
                              <div className="card-body">
                                <form id="form1" className="needs-validation">
                                    
                                        <div className="col-md-12 mb-3">
                                             
                                             <input  type="text" placeholder="Ingrese NIT" name="txtNIT" id="txtNIT" className="form-control" ></input>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            
                                            <input  type="text" placeholder="Ingrese razón social" name="txtRazonS" id="txtRazonS" className="form-control" ></input>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            
                                            <input  type="text" placeholder="Ingrese dirección" name="txtDireccion" id="txtDireccion" className="form-control" ></input>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            
                                            <input  type="text" placeholder="Ingrese teléfono" name="txtTelefono" id="txtTelefono" className="form-control" ></input>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            
                                            <input  type="text" placeholder="Ingrese Email" name="txtEmail" id="txtEmail" className="form-control" ></input>
                                        </div>
                                        
                                       

                                            <div className="form-group row mb-2">
                                                <div className="col-md-3 ml-5">
                                                    <button type="submit" className="btn btn-primary">Editar</button>
                                                </div>
                                                <div  className="col-md-3.5">
                                                    <button type="submit" className="btn btn-primary">Guardar</button>
                                                </div>
                                                <div  className="col-md-3">
                                                    <button type="submit" className="btn btn-primary">Borrar</button>
                                                </div>
                                            </div>

                                            
                                            
                                            
                                    
                                </form>
                            </div>

                         </div>
                    </div>
                </div>
            </div>

        </Container>
    )
}

export default PropietarioJ