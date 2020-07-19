import React from 'react';



const Footer = () => {
    return(
        <div className="page-footer">
            <div className="container">
                <div className="row">
                    {/* column 1 */}
                    <div className="col-md-3 col-sm-6">
                        <h4> Contact Info  </h4>
                        <ul className="list-unstyled">
                            <li> The Food Truck Blog </li>
                            <li> 2244 Golden Sunset Dr.</li>
                            <li> 530-222-9448 </li>
                            <li> foodtruckblogs@gmail.com </li>
                        </ul>
                    </div>
                     {/* column 2 */}
                     <div className="col-md-3 col-sm-6">
                        <h4> Social Media </h4>
                        <ul className="list-unstyled">
                            <li> </li>
                            <li>  </li>
                            <li> </li>
                            <li>  </li>
                        </ul>
                    </div>
                    
                    </div>
                    
                </div>
            </div>
    );
}


export default Footer;
