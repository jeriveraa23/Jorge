import Container from   '../components/Container'
import Head from 'next/head'

const Construccion=()=>{
    return(
        <Container>
            <Head>
                <title>Construccion</title>
            </Head>
            
            <hr></hr>
            <div className="container mt-4 mr-5">
                <div className="abs-center">
                    <div className="col-lg-5">
                        <div className="card shadow-lg p-3 mb-5 bg-white">
                            <div className="card-header mx-auto">CONSTRUCCIÓN</div>
                            <div className="card-body">
                                <form id="form1" className="needs-validation">
                                    
                                        <div className="col-md-12 mb-3">
                                             
                                             <input  type="text" placeholder="Ingrese ID de cconstrucción" name="txtIdContr" id="txtIdContr" className="form-control" ></input>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            
                                            <input  type="text" placeholder="Ingrese número de pisos" name="txtNPisosConstr" id="txtNPisosConstr" className="form-control" ></input>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            
                                            <input  type="text" placeholder="Ingrese área de construcción" name="txtAreaConstr" id="txtAreaConstr" className="form-control" ></input>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            
                                        <select className="form-control" id="txtTipoConstr">
                                                <option hidden selected>Seleccione tipo de construcción</option>
                                                <option value="Industrial">Industrial</option>
                                                <option value="Comercial">Comercial</option>
                                                <option value="Residencial">Residencial</option>
                                            </select>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            
                                            <input  type="text" placeholder="Ingrese dirección construcción" name="txtDirConstr" id="txtDirConstr" className="form-control" ></input>
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
export default Construccion