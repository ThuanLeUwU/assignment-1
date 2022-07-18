// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import {
//    Breadcrumb,
//    BreadcrumbItem,
//    Card,
//    CardBody,
//    CardImg,
//    CardImgOverlay,
//    CardTitle,
// } from "reactstrap";
// // function RenderMenuItem({ dish, onClick }) {
// //    return (
// //       // onClick={() => onClick(dish.id)}
// //       <Card>
// //          <Link to={`/menu/${dish.id}`}>
// //             <CardImg width="100%" src={dish.image} alt={dish.name} />
// //             <CardImgOverlay>
// //                <CardTitle>{dish.name}</CardTitle>
// //             </CardImgOverlay>
// //          </Link>
// //       </Card>
// //    );
// // }

// class Menu extends Component {
//    constructor(props) {
//       super(props);
//       this.state = {
//          selectedDish: null
//       }
//    }

//    onDishSelect(dish) {
//       this.setState({ selectedDish: dish });
//    }

//    renderDish(dish) {
//       if (dish != null) {
//          return (
//             <Card>
//                <CardImg top src={dish.image} alt={dish.name} />
//                <CardBody>
//                   <CardTitle>{dish.name}</CardTitle>
//                   <CardTitle>{dish.description}</CardTitle>
//                </CardBody>
//             </Card>
//          );
//       } else {
//          return (
//             <div></div>
//          );
//       }
//    }

//    render() {
//       // if (this.props.dishes) {
//       const menu = this.props.dishes.map((dish) => {
//          return (
//             <div className="col-12 col-md-5 m-1">
//                <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
//                   <CardImg width="100%" src={dish.image} alt={dish.name} />
//                   <CardImgOverlay>
//                      <CardTitle>{dish.name}</CardTitle>
//                   </CardImgOverlay>
//                </Card>
//             </div>
//          );
//       });


//       return (
//          <div className="Container">
//             <div className="row">
//                {menu}
//             </div>
//             <div className="row">
//                <div className="col-12 col-md-5 m-1">
//                   {this.renderDish(this.state.selectedDish)}
//                </div>
//             </div>
//          </div>
//       );
//       // }
//    }
//    // render() {
//    //    const menu = this.props.dishes.map((dish) => {
//    //       return (
//    //          <div className="col-12 col-md-5 m-1">
//    //             <div key={dish.id}>
//    //                <RenderMenuItem dish={dish} />
//    //             </div>
//    //          </div>
//    //       );
//    //    });
//    //    return (
//    //       <div>
//    //          <div className="container">
//    //             <div className="row">
//    //                <Breadcrumb>
//    //                   <BreadcrumbItem>
//    //                      <Link to="/home">Home</Link>
//    //                   </BreadcrumbItem>
//    //                   <BreadcrumbItem active>Menu</BreadcrumbItem>
//    //                </Breadcrumb>
//    //                <div className="col-12">
//    //                   <h3>Menu</h3>
//    //                   <hr />
//    //                </div>
//    //             </div>
//    //             <div className="row">{menu}</div>
//    //          </div>
//    //       </div>
//    //    );
//    // }
// }

// // const Menu = (props) => {
// //    const menu = props.dishes.map((dish) => {
// //       return (
// //          <div className="col-12 col-md-5 m-1" key={dish.id}>
// //             <RenderMenuItem dish={dish} onClick={props.onClick} />
// //          </div>
// //       );
// //    });
// //    return (
// //       <div className="container">
// //          <div className="row">{menu}</div>
// //       </div>
// //    );
// // };
// export default Menu;

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