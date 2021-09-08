import Container from   '../components/Container'
import Head from 'next/head'

const Terreno=()=>{
    return(
        <Container>
            <Head>
                <title>Terreno</title>
            </Head>
            
            <hr></hr>
            <div className="container mt-4 mr-5">
                <div className="abs-center">
                    <div className="col-lg-5">
                        <div className="card shadow-lg p-3 mb-5 bg-white">
                            <div className="card-header mx-auto">TERRENO</div>
                            <div className="card-body">
                                <form id="form1" className="needs-validation">
                                    
                                        <div className="col-md-12 mb-3">
                                             
                                             <input  type="text" placeholder="Ingrese ID del terreno" name="txtIdTer" id="txtIdTer" className="form-control" ></input>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            
                                            <input  type="text" placeholder="Ingrese área del terreno" name="txtAreaTer" id="txtIdTer   " className="form-control" ></input>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            
                                        <select className="form-control" id="txtFuentesAgua">
                                                <option hidden selected>¿Hay fuentes de agua cerca?</option>
                                                <option value="Si">Si</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            
                                        <select className="form-control" id="txtTipoTer">
                                                <option hidden selected>Seleccione tipo de terreno</option>
                                                <option value="Rural">Rural</option>
                                                <option value="Urbano">Urbano</option>
                                            </select>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <select className="form-control" id="txtConstrTer">
                                                <option hidden selected>¿Hay construcciones en el terreno?</option>
                                                <option value="Si">Si</option>
                                                <option value="No">No</option>
                                            </select>
                                            
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
export default Terreno