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

function RenderCarousel() {
   return (
      
      <Gallery/>
   );
}

function RenderFeedback({item}) {
   return(
      <Card>
         <CardImg src={item.image}/>
         <CardBody>
            <CardTitle>{item.feedback}</CardTitle>
            <CardText>{item.address}</CardText>
         </CardBody>
      </Card>
   );
}

function Home(props) {
   return (
      <div className="container">
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
         <RenderCarousel/>
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
      </div>
   );
}
export default Home;
