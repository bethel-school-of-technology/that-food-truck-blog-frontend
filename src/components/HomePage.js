import React, { Component } from 'react';
import Image1 from '../pictures/truckphoto1.png';
import Image2 from '../pictures/truckphoto2.png';
import Image3 from '../pictures/truckphoto3.png';
import Image4 from '../pictures/truckphoto4.png';
import './HomePage.css';




export class HomePage extends Component {
    render() {
        return (
            <div className="container">
                <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner ">
                        <div className="carousel-item active" data-interval="10000">
                            <img src={Image1} className="d-block w-100" alt="this is photo one"></img>
                        </div>
                        <div className="carousel-item" data-interval="10000">
                            <img src={Image2} className="d-block w-100" alt="This is photo Two"></img>
                        </div>
                        <div className="carousel-item" data-interval="10000">
                            <img src={Image3} className="d-block w-100" alt="This is photo Three"></img>
                        </div>
                        <div className="carousel-item" data-interval="10000">
                            <img src={Image4} className="d-block w-100" alt="This is photo Four"></img>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                <div className="h3 text-center">
                    Welcome to That Food Truck's Blog
                </div>


                <div class="card text-center">
                    <div class="card-header">
                        Featured
                    </div>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12 mt-3">
                                <div class="card">
                                    <div class="card-horizontal">
                                        <div class="img-square-wrapper">
                                            <img src={Image1} className="d-block w-100" alt="this is photo one"></img>
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">Special title treatment</h5>
                                            <p class="card-text">
                                                Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="card text-center">
                    <div class="card-header">
                        More
                    </div>
                    <div class="card-body">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-12 mt-3">
                                    <div class="card">
                                        <div class="card-horizontal">
                                            <div class="card-body">
                                                <h5 class="card-title">Second thing to say</h5>
                                                <p class="card-text">
                                                    Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.
                                            </p>
                                            </div>
                                            <div class="img-square-wrapper">
                                                <img src={Image2} className="d-block w-100" alt="this is photo one"></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-12 mt-3">
                                    <div class="card">
                                        <div class="card-horizontal">
                                            <div class="img-square-wrapper">
                                                <img src={Image3} className="d-block w-100" alt="this is photo one"></img>
                                            </div>
                                            <div class="card-body">
                                                <h5 class="card-title">Third thing to say</h5>
                                                <p class="card-text">
                                                    Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.
                                            </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-12 mt-3">
                                    <div class="card">
                                        <div class="card-horizontal">
                                            <div class="card-body">
                                                <h5 class="card-title">Forth thing to say</h5>
                                                <p class="card-text">
                                                    Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.
                                            </p>
                                            </div>
                                            <div class="img-square-wrapper">
                                                <img src={Image4} className="d-block w-100" alt="this is photo one"></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default HomePage
