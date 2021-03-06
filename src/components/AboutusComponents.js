// import React from "react";
// import {
//    Breadcrumb,
//    BreadcrumbItem,
//    Card,
//    CardBody,
//    CardHeader,
//    Media,
// } from "reactstrap";
// import { Link } from "react-router-dom";
// import { Loading } from "./LoadingComponent";
// import { baseUrl } from "../shared/baseUrl";
// import { Fade, Stagger } from "react-animation-components";

// function RenderLeader({ leader }) {
//    return (
//       <Media tag="li">
//          <Media left middle>
//             <Media object src={baseUrl + leader.image} alt={leader.name} />
//          </Media>
//          <Media body className="ml-5">
//             <Media heading>{leader.name}</Media>
//             <p>{leader.designation}</p>
//             <p>{leader.description}</p>
//          </Media>
//       </Media>
//    );
// }

// function LeaderList(props) {
//    const leaders = props.leaders.leaders.map((leader) => {
//       return (
//          <Fade in key={leader._id}>
//             <div className="col-12 mt-2">
//                <RenderLeader leader={leader} />
//             </div>
//          </Fade>
//       );
//    });

//    if (props.leaders.isLoading) {
//       return <Loading />;
//    } else if (props.leaders.errMess) {
//       return (
//          <div className="col-12">
//             <h4>{props.leaders.errMess}</h4>
//          </div>
//       );
//    } else {
//       return (
//          <Media list>
//             <Stagger in>{leaders}</Stagger>
//          </Media>
//       );
//    }
// }

// function About(props) {
//    return (
//       <div className="container">
//          <div className="row">
//             <Breadcrumb>
//                <BreadcrumbItem>
//                   <Link to="/home">Home</Link>
//                </BreadcrumbItem>
//                <BreadcrumbItem active>About Us</BreadcrumbItem>
//             </Breadcrumb>
//             <div className="col-12">
//                <h3>About Us</h3>
//                <hr />
//             </div>
//          </div>
//          <div className="row row-content">
//             <div className="col-12 col-md-6">
//                <h2>Our History</h2>
//                <p>
//                   Started in 2010, Ristorante con Fusion quickly established
//                   itself as a culinary icon par excellence in Hong Kong. With
//                   its unique brand of world fusion cuisine that can be found
//                   nowhere else, it enjoys patronage from the A-list clientele in
//                   Hong Kong. Featuring four of the best three-star Michelin
//                   chefs in the world, you never know what will arrive on your
//                   plate the next time you visit us.
//                </p>
//                <p>
//                   The restaurant traces its humble beginnings to{" "}
//                   <em>The Frying Pan</em>, a successful chain started by our
//                   CEO, Mr. Peter Pan, that featured for the first time the
//                   world's best cuisines in a pan.
//                </p>
//             </div>
//             <div className="col-12 col-md-5">
//                <Card>
//                   <CardHeader className="bg-primary text-white">
//                      Facts At a Glance
//                   </CardHeader>
//                   <CardBody>
//                      <dl className="row p-1">
//                         <dt className="col-6">Started</dt>
//                         <dd className="col-6">3 Feb. 2013</dd>
//                         <dt className="col-6">Major Stake Holder</dt>
//                         <dd className="col-6">HK Fine Foods Inc.</dd>
//                         <dt className="col-6">Last Year's Turnover</dt>
//                         <dd className="col-6">$1,250,375</dd>
//                         <dt className="col-6">Employees</dt>
//                         <dd className="col-6">40</dd>
//                      </dl>
//                   </CardBody>
//                </Card>
//             </div>
//             <div className="col-12">
//                <Card>
//                   <CardBody className="bg-faded">
//                      <blockquote className="blockquote">
//                         <p className="mb-0">
//                            You better cut the pizza in four pieces because I'm
//                            not hungry enough to eat six.
//                         </p>
//                         <footer className="blockquote-footer">
//                            Yogi Berra,
//                            <cite title="Source Title">
//                               The Wit and Wisdom of Yogi Berra, P. Pepe,
//                               Diversion Books, 2014
//                            </cite>
//                         </footer>
//                      </blockquote>
//                   </CardBody>
//                </Card>
//             </div>
//          </div>
//          <div className="row row-content">
//             <div className="col-12">
//                <h2>Corporate Leadership</h2>
//             </div>
//             <LeaderList leaders={props.leaders} />
//          </div>
//       </div>
//    );
// }

// export default About;

import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media, CardImg, CardText, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const About = () => {

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content form-feedback">
                <div className="col-12 col-md-8 mx-2">
                    <h2>YCStore l?? g???</h2>
                    <p><b>YCStore</b> l?? m???t c???a h??ng tr???c tuy???n v???i m???c ????ch cung c???p d???ch v??? mua b??n trong n?????c v??? c??c m???t h??ng ????? ch??i, ????? l??u ni???m, ????? d??ng ???????c s???n xu???t v?? thi???t k??? theo nhi???u ch??? ????? kh??c nhau, d???a tr??n c??c ti??u ch??: gi?? c???, ch???t l?????ng, an to??n v?? d???ch v???.</p>
                    <p><b>YCStore</b> c?? b???n l?? m???t c???a h??ng tr???c tuy???n, n??n ngo??i nh???ng m???t h??ng c?? s???n th?? ch??ng t??i c??n nh???n ?????t h??ng theo y??u c???u, ho???c ????? xu???t nh???p h??ng m???i s???n ph???m th??ng qua <a href='https://www.facebook.com/tiemtaphoacuacuonganime'><b>Fanpage</b></a> c???a ch??ng t??i.
                        Tuy nhi??n t??y lo???i m???t h??ng m?? th???i gian c?? h??ng c?? th??? ch??nh l???ch t??? 3-5 ng??y n??n mong c??c b???n th??ng c???m cho shop. </p>
                </div>
                <div className="col-12 col-md-3 ">
                    <img src='/assets/images/blushing-anime.gif'></img>
                </div>
                <div className="col-12 col-md-3">
                    <div className='col-12'>
                        <img src="/assets/images/zz2.png" className='mine'></img>
                    </div>
                    <div className='col-12 text-center'>
                        <b>Co-Founder</b><br />
                        <strong>L?? Minh Thu???n</strong>
                    </div>
                </div>
                <div className='col-12 col-md-8'>
                    <h2>T??i l?? ai?</h2>
                    <p>T??i l?? <a href='https://www.facebook.com/leminhthuan2809'>L?? Minh Thu???n</a>. T??i c?? s??? th??ch v??? anime ???????c g???n 10 n??m nay. T??i th?????ng ??i nh???ng l??? h???i v??? anime v?? c??ng s??u t???p ???????c r???t nhi???u qu?? l??u ni???m v??? anime.</p>
                    <h2>T???i sao t??i l??m YCStore?</h2>
                    <p>G???n ????y t??i c?? m???t ch??t ??am m?? v??? cosplay n??n t??i th?????ng ??i l??? h???i trong trang ph???c cosplay. T??i th???y c??ng c?? kh?? nhi???u b???n chung s??? th??ch cosplay. Nh??ng c??n kh?? l?? ??t so v???i nh???ng l??? h???i t??? ch???c ??? c??c n??i kh??c. ??i???u ???? t???o ?????ng l???c cho t??i t???o ra YCStore c???a ri??ng t??i ????? gi??p c??c b???n c?? chung s??? th??ch cosplay nh?? t??i c?? th??? th???a m??n s??? th??ch c???a b???n th??n.</p>
                </div>
            </div>
            {/* <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        {leaders}
                    </Media>
                </div>
            </div> */}
        </div>
    );
}

export default About;    
