import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import {
   Card,
   CardImg,
   CardText,
   CardBody,
   CardTitle,
   Breadcrumb,
   BreadcrumbItem,
   Form,
   FormGroup,
   Col,
   Input,
   Label,
   Button,
} from "reactstrap";
import AccordionComponent from "./AccordionComponent";

import ModalExample from "./ModalLogin";
import TabDetailComponent from "./TabDetailComponent";
function RenderDish({ dish }) {
   return (
      <div className="col-12">
         <Card>
            <CardImg top src={dish.image} alt={dish.name} />
         </Card>
      </div>
   );
}




class DishDetail extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      if (this.props.dish != null) {
         const dish = this.props.dish;
         // const comments = this.props.comments;
         return (
            <div className="container">
               <div className="row">
                  <Breadcrumb>
                     <BreadcrumbItem>
                        <Link to="/menu">Menu</Link>
                     </BreadcrumbItem>
                     <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                  </Breadcrumb>
                  <div className="col-12">
                     <h3>{dish.name}</h3>
                     <hr />
                  </div>
               </div>
               <div className="row">
                  <div className="col-12 col-md-5 m-1">
                     <RenderDish dish={dish} />
                  </div>
                  <div className="col-12 col-md-5 m-1 card-price">
                     {/* <RenderComments comments={comments} /> */}
                     <h3>{dish.price}</h3>
                     <p><strong>* Coupon không áp dụng cho sản phẩm này</strong></p>
                     <p><strong>* Hoàn đến 100.000đ khi để lại đánh giá trên web kèm hình ảnh</strong></p>
                     <Form>
                        <FormGroup row>
                           <Col>
                              <Label>Size:</Label>
                              <Input type="select">
                                 <option>Chọn tùy chọn</option>
                                 <option>S</option>
                                 <option>M</option>
                                 <option>L</option>
                                 <option>XL</option>
                                 <option>XXL</option>
                              </Input>
                           </Col>
                        </FormGroup>
                        <FormGroup row>
                           <Col md={{ size: 10, }}>
                              <Button type="" color="primary" className="">
                                 Thêm vào giỏ hàng
                              </Button>         
                              <NavLink to='/payment' className='btn btn-success m-2'>Payment orders</NavLink>
                              {/* <ModalExample /> */}
                           </Col>
                        </FormGroup>
                     </Form>
                  </div>
               </div>
               <div>
               <TabDetailComponent dish={dish}/>
               </div>
            </div>
         );
      } else {
         return <div></div>;
      }
   }
}
export default DishDetail;
