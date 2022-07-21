import React from "react";
import {
   Card,
   CardImg,
   CardText,
   CardBody,
   CardTitle,
   CardSubtitle,
} from "reactstrap";
import AccordionComponent from "./AccordionComponent";
import Gallery from "./CarouselComponent";
import CarouselFeedback from "./CarouselFeedback";
import Carousel from 'better-react-carousel'

function RenderCarousel() {
   return (

      <Gallery />
   );
}

function RenderFeedback({ item }) {
   return (
      <Card>
         <CardImg src={item.image} />
         <CardBody>
            <CardTitle>{item.feedback}</CardTitle>
            <CardText>{item.address}</CardText>
         </CardBody>
      </Card>
   );
}

function Home(props) {
   const fback = props.feedbacks.map((fback) => {
      return(
         // <div>
         // <img src={fback.image} width="20%"/>
         // <p>{fback.feedback}</p>
         // </div>
         <Carousel cols={1} rows={1} gap={1} loop={2000} autoplay={2000}>
      <Carousel.Item>
      <img src={fback.image} width="20%"/>
      <p>{fback.feedback}</p>
      </Carousel.Item>
    </Carousel>
      )
   })
   return (
      <div className="">
         {/* <div className="row align-items-start">
            <div className="col-12 col-md m-1">
               <RenderCard item={props.dish} />
            </div>
            <div className="col-12 col-md m-1">
               <RenderCard item={props.promotion} />
            </div>
            <div className="col-12 col-md m-1">
               <RenderCard item={props.leader} />
            </div>
         </div> */}
         <div className="container">
            <RenderCarousel />
         </div>
         {/* <AccordionComponent/> */}
         {/* <div className="row align-items-start">
            <div className="col-12 col-md m-1">
               <RenderCard item={props.dish} />
            </div>
            <div className="col-12 col-md m-1">
               <RenderCard item={props.promotion} />
            </div>
            <div className="col-12 col-md m-1">
               <RenderCard item={props.leader} />
            </div>
         </div> */}
         {/* <RenderFeedback item={props.leader}/> */}
         {/* <CarouselFeedback/> */}
         <div className="img-discount position-relative">
            {/* <div className="row col-12 col-md-7">

         </div> */}
            {/* <h1 className="text-discount position-absolute " >abyughugugu</h1> */}
         </div>
         {/* <Carousel cols={1} rows={1} gap={1} loop={2000} autoplay={2000}>
      <Carousel.Item>
      {fback}
      </Carousel.Item>
    </Carousel> */}
         {fback}
      </div>
   );
}
export default Home;
