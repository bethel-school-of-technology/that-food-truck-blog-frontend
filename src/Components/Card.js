import React, { Component, Fragment } from 'react'

export class Card extends Component {

    render() {
        //sets Cards to the props passed in as Cards
        //need an array of objects that have feilds title, about, ing
        //you also need to pass into props the Title 
        let Cards = this.props.Cards;
        return (

            <div className="card text-center m-3">
                <div className="card-header">
                    {this.props.Title}
                </div>
                {/* Loops through the Card Prop */}
                {Cards.map((card, index) => {
                    //if index is odd puts piture second if even puts it last
                    if (index % 2) {
                        return (
                            <div className="card-body">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-12 mt-3">
                                            <div className="card">
                                                <div className="card-horizontal">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{card.title}</h5>
                                                        <p className="card-text">{card.about}</p>
                                                    </div>
                                                    <div className="img-square-wrapper">
                                                        <img src={card.img} className="d-block w-100" alt="this is photo one"></img>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        )
                    } else {
                        return (
                            <div className="card-body">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-12 mt-3">
                                            <div className="card">
                                                <div className="card-horizontal">
                                                    <div className="img-square-wrapper">
                                                        <img src={card.img} className="d-block w-100" alt="this is photo one"></img>
                                                    </div>
                                                    <div className="card-body">
                                                        <h5 className="card-title">{card.title}</h5>
                                                        <p className="card-text">{card.about}</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}

            </div>
        )
    }
}

export default Card
