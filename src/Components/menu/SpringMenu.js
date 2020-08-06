import React, {Component} from 'react';
import './menu.css'

const SpringMenu = () => {
    return(

        <div className='menu-page'>
            <div id="demo" className="carousel slide" data-ride="carousel">


<ul className="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" class="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
  <li data-target="#demo" data-slide-to="2"></li>
</ul>


<div className="carousel-inner">
  <div className="carousel-item active">
    <img src="la.jpg" alt="Los Angeles" />
  </div>
  <div className="carousel-item">
    <img src="chicago.jpg" alt="Chicago" />
  </div>
  <div className="carousel-item">
    <img src="ny.jpg" alt="New York" />
  </div>
</div>


<a className="carousel-control-prev" href="#demo" data-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</a>
<a className="carousel-control-next" href="#demo" data-slide="next">
  <span className="carousel-control-next-icon"></span>
</a>

</div>

        </div>



    );
};

export default SpringMenu