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

function About(props) {

    const leaders = props.leaders.map((leader) => {
        return (
            <div className="row">
                <div className=" col-12 col-sm-4">
                    <div className=" col-12 col-sm-7 offset-1">
                        <CardImg top src={leader.image} alt={leader.name} />
                    </div>
                    <div className=" col-12 col-sm-5">

                    </div>
                </div>
                <div className=" col-12 col-sm-8">
                    <div className=" col-12 col-sm-9">
                        <CardBody>
                            <CardTitle>{leader.name}</CardTitle>
                            <CardText>{leader.description}</CardText>
                        </CardBody>
                    </div>
                    <div className=" col-12 col-sm-3">
                    </div>
                </div>
            </div>
        );
    });

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
                    <h2>YCStore là gì?</h2>
                    <p><b>YCStore</b> là một cửa hàng trực tuyến với mục đích cung cấp dịch vụ mua bán trong nước về các mặt hàng đồ chơi, đồ lưu niệm, đồ dùng được sản xuất và thiết kế theo nhiều chủ đề khác nhau, dựa trên các tiêu chí: giá cả, chất lượng, an toàn và dịch vụ.</p>
                    <p><b>YCStore</b> cơ bản là một cửa hàng trực tuyến, nên ngoài những mặt hàng có sẵn thì chúng tôi còn nhận đặt hàng theo yêu cầu, hoặc đề xuất nhập hàng mới sản phẩm thông qua <a href='https://www.facebook.com/tiemtaphoacuacuonganime'><b>Fanpage</b></a> của chúng tôi.
                        Tuy nhiên tùy loại mặt hàng mà thời gian có hàng có thể chênh lệch từ 3-5 ngày nên mong các bạn thông cảm cho shop. </p>
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
                        <strong>Lê Minh Thuận</strong>
                    </div>
                </div>
                <div className='col-12 col-md-8'>
                    <h2>Tôi là ai?</h2>
                    <p>Tôi là <a href='https://www.facebook.com/leminhthuan2809'>Lê Minh Thuận</a>. Tôi có sở thích về anime được gần 10 năm nay. Tôi thường đi những lễ hội về anime và cũng sưu tập được rất nhiều quà lưu niệm về anime.</p>
                    <h2>Tại sao tôi làm YCStore?</h2>
                    <p>Gần đây tôi có một chút đam mê về cosplay nên tôi thường đi lễ hội trong trang phục cosplay. Tôi thấy cũng có khá nhiều bạn chung sở thích cosplay. Nhưng còn khá là ít so với những lễ hội tổ chức ở các nơi khác. Điều đó tạo động lực cho tôi tạo ra YCStore của riêng tôi để giúp các bạn có chung sở thích cosplay như tôi có thể thỏa mãn sở thích của bản thân.</p>
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
