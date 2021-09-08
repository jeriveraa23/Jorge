import Container from   '../components/Container'
import Head from 'next/head'

const Predio=()=>{
    return(
        <Container>
            <Head>
                <title>Predio</title>
            </Head>
            <hr></hr>
            <div className="container mt-4 mr-5">
                <div className="abs-center">
                    <div className="col-lg-5">
                        <div className="card shadow-lg p-3 mb-5 bg-white">
                            <div className="card-header mx-auto">PREDIO</div>
                            <div className="card-body">
                                <form id="form1" className="needs-validation">
                                    
                                        <div className="col-md-12 mb-3">
                                             
                                             <input  type="text" placeholder="Ingrese número de predio" name="txtNumPred" id="txtNumPred" className="form-control" ></input>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            
                                            <input  type="text" placeholder="Ingrese número de avaluo" name="txtNumAvaluo" id="txtNumAvaluo" className="form-control" ></input>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            
                                            <input  type="text" placeholder="Ingrese nombre del predio" name="txtNomPred" id="txtNomPred" className="form-control" ></input>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            
                                            <input  type="text" placeholder="Ingrese departamento de ubicación" name="txtDepUbi" id="txtDepUbi" className="form-control" ></input>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            
                                            <input  type="text" placeholder="Ingrese municipio de ubicación" name="txtMunUbi" id="txtMunUbi" className="form-control" ></input>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            
                                            <input  type="text" placeholder="Ingrese ID del propietario" name="txtIdProp" id="txtIdProp" className="form-control" ></input>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            
                                            <input  type="text" placeholder="Ingrese ID de construcción" name="txtIdConst" id="txtIdConst" className="form-control" ></input>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            
                                            <input  type="text" placeholder="Ingrese ID de terreno" name="txtIdTer" id="txtIdTer" className="form-control" ></input>
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
export default Predio