import React from "react";
import { Link } from "react-router-dom";
function Footer(props) {
   return (
      <div className="footer ">
         <div className="container">
            <div className="row justify-content-center">               
               <div className="col-8  col-sm-5 footer2">
                  <h5><u>YCStore</u></h5>
                  <address>
                     124/104/17 Xô Viết Nghệ Tĩnh <br />
                     Phường 21, Quận Bình Thạnh <br />
                     Thành Phố Hồ Chí Minh, Việt Nam <br />
                     <i className="fa fa-phone fa-lg"></i>:+843 3389 2623<br />
                     {/* <i className="fa fa-fax fa-lg"></i>:+852 8765 4321 <br /> */}
                     <i className="fa fa-envelope fa-lg"></i>:
                     <a href="mailto:lthuan2809@gmail.com">lthuan2809@gmail.com </a>
                  </address>
               </div>
               <div className="col-4 col-sm-3 footer1">
                  <h5><u>Links</u></h5>
                  <ul className="list-unstyled">
                     <li>
                        <Link to="/home">Home</Link>
                     </li>
                     <li>
                        <Link to="/aboutus">About Us</Link>
                     </li>
                     <li>
                        <Link to="/menu">Menu</Link>
                     </li>
                     <li>
                        <Link to="/contactus">Contact Us</Link>
                     </li>
                  </ul>
               </div>
               <div className="col-12 col-sm-4 footer3">
                  <div className="">
                     <div>
                        <h5><u>Facebook</u></h5>
                        <div class="fb-page" data-href="https://www.facebook.com/tiemtaphoacuacuonganime" data-tabs=""
                           data-width="" data-height=""
                           data-small-header="true" data-adapt-container-width="true"
                           data-hide-cover="false" data-show-facepile="true"><blockquote
                              cite="https://www.facebook.com/tiemtaphoacuacuonganime" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/tiemtaphoacuacuonganime">
                                 Tiệm Tạp Hóa của Cuồng Anime</a></blockquote>
                        </div>
                     </div>
                     {/* <a
                        className="btn btn-social-icon btn-goodle"
                        href="http://google.com/+"
                     >
                        <i className="fa fa-google-plus"></i>
                     </a>
                     <a
                        className="btn btn-social-icon btn-facebook"
                        href="http://www.facebook.com/profile.php?id="
                     >
                        <i className="fa fa-facebook"></i>
                     </a>
                     <a
                        className="btn btn-social-icon btn-linkedin"
                        href="http://linkedin.com/"
                     >
                        <i className="fa fa-linkedin"></i>
                     </a>
                     <a
                        className="btn btn-social-icon btn-twitter"
                        href="http://twitter.com/"
                     >
                        <i className="fa fa-twitter"></i>
                     </a>
                     <a
                        className="btn btn-social-icon btn-google"
                        href="http://youtube.com/"
                     >
                        <i className="fa fa-youtube"></i>
                     </a>
                     <a className="btn btn-social-icon" href="mailto:">
                        <i className="fa fa-envelope-o"></i>
                     </a> */}
                     <div>
                        <h5><u>Hỗ Trợ Thanh Toán</u></h5>
                        <img src="/assets/images/Payment-Methods.png"></img>
                        </div>
                  </div>
               </div>
            </div>
            {/* <div className="row justify-content-center">
               <div className="col-auto">
                  <p>Copyright 2018 YCStore</p>
               </div>
            </div> */}
         </div>
      </div>
   );
}
export default Footer;
