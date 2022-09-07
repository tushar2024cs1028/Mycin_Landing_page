import React from "react";
import "./Footer.css";
import logo from "../../assests/logo.png";

function Footer() {
    return (
        <div className="footer">
            <div className="container2">
                 <div className="row">
                 <div className="footer-col">
                        <img className="logo2" src={logo} alt=""></img>
  	 			         <ul className="logoul">
  	 				        <li><p className="footer-item">Location</p></li>
  	 				        <li><p className="footer-item">Email</p></li>
  	 				        <li><p className="footer-item">Phone no</p></li>
  	 				        
  	 			         </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Get help</h4>
  	 			         <ul>
  	 				        <li><a href="#!">about us</a></li>
  	 				        <li><a href="#!">our services</a></li>
  	 				        <li><a href="#!">privacy policy</a></li>
  	 				        <li><a href="#!">affiliate program</a></li>
  	 			         </ul>
                    </div>

                 
                    <div class="footer-col">
  	 			        <h4>Follow us</h4>
  	 			             <div className="social-links">
                                <a href="#!"><i class="ri-facebook-fill"></i></a>
  	 			             	<a href="#!"><i class="ri-twitter-fill"></i></a>
  	 				            <a href="#!"><i class="ri-instagram-fill"></i></a>
  	 				            <a href="#!"><i class="ri-linkedin-box-fill"></i></a>
  	 			                </div>
  	 		        </div>

					
            </div>
			        <div className="creationline ">
						<p>Made with<i class="ri-heart-fill heart"></i>by MYCIN CLUB</p>
					
					   <div className="botmlin">
						<p>© 2022 Design MYCIN CLUB</p>
					   </div>
					</div>
        </div>

     </div>
    );
};
export default Footer;