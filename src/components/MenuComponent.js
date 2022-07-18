
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
   Breadcrumb,
   BreadcrumbItem,
   Card,
   CardImg,
   CardImgOverlay,
   CardTitle,
} from "reactstrap";
function RenderMenuItem({ dish, onClick }) {
   return (
      // onClick={() => onClick(dish.id)}
      <Card style={{ width: '18rem' }} className='Card h-100 text-center mx-auto mb-4 border-0'>
         
         <Link to={`/menu/${dish.id}`}>
         
            <CardImg  src={dish.image} alt={dish.name} />
            {/* <CardImgOverlay> */}
               <CardTitle className="text-title">{dish.name}</CardTitle>
               
            {/* </CardImgOverlay> */}
         </Link>
         <b><span className="price">{dish.price}</span></b>
      </Card>
   );
}

class Menu extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      const menu = this.props.costumes.map((dish) => {
         return (
            <div className="col-12 col-md-4 px-2 ">
               <div key={dish.id}>
                  <RenderMenuItem dish={dish} />
               </div>
            </div>
         );
      });
      return (
         <div>
            <div className="container">
               <div className="row">
                  <Breadcrumb>
                     <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                     </BreadcrumbItem>
                     <BreadcrumbItem active>Menu</BreadcrumbItem>
                  </Breadcrumb>
                  <div className="col-12">
                     <h3>Costumes</h3>
                     <hr />
                  </div>
               </div>
               <div className="row">{menu}</div>
            </div>
         </div>
      );
   }
}

// const Menu = (props) => {
//    const menu = props.dishes.map((dish) => {
//       return (
//          <div className="col-12 col-md-5 m-1" key={dish.id}>
//             <RenderMenuItem dish={dish} onClick={props.onClick} />
//          </div>
//       );
//    });
//    return (
//       <div className="container">
//          <div className="row">{menu}</div>
//       </div>
//    );
// };
export default Menu;