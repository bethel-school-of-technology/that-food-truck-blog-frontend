import React, { Component } from 'react'

export class Card extends Component {

    render() {
        //sets Cards to the props passed in as Cards
        //need an array of objects that have feilds title, about, img
        //you also need to pass into props the Title 
        let Cards = this.props.Cards;
        return (

            <div className="card text-center m-3 shadow p-3 mb-5 bg-white rounded">
                <div className="card-header">
                    {this.props.Title}
                </div>
                {/* Loops through the Card Prop */}
                {Cards.map((card, index) => {
                    //if index is odd puts piture second if even puts it last
                    let side = index % 2 ? true : false;
                    return (
                        <div className="card-body " key={index}>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12 mt-3">
                                        <div className="card" >
                                            <div className="card-horizontal">
                                                {!side ?
                                                    <div className="img-square-wrapper">
                                                        <img src={card.img} className="d-block w-100" alt="list item"></img>
                                                    </div>
                                                    : null}
                                                <div className="card-body">
                                                    <h5 className="card-title">{card.title}</h5>
                                                    <p className="card-text">{card.about}</p>
                                                </div>
                                                {side ?
                                                    <div className="img-square-wrapper">
                                                        <img src={card.img} className="d-block w-100" alt="list item"></img>
                                                    </div>
                                                    : null}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    )

                })}

            </div>
        )
    }
}

export default Card
