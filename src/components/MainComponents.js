import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import DishDetail from "./CostumedetailComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Redirect, Route, Switch } from "react-router-dom";
import Contact from "./ContactComponent";
import About from "./AboutusComponents";
import { COSTUMES } from "../shared/costumes";
import { FEEDBACKS } from "../shared/feedback";
import PaymentDetail from "./PaymentComponent";
import Payment from "./PaymentComponent";
// import Cart from "./CarouselComponent";
class Main extends Component {
   constructor(props) {
      super(props);
      this.state = {
         costumes: COSTUMES,
         // promotions: PROMOTIONS,
         feedbacks:FEEDBACKS,
      };
   }
   // onDishSelect(dishId) {
   //    this.setState({ selectedDish: dishId });
   // }
   render() {
      const HomePage = () => {
         return (
            <Home
               feedbacks={
                  this.state.feedbacks
               }
            />
         );
      };
      const DishWithId = ({ match }) => {
         return (
            <DishDetail
               dish={
                  this.state.costumes.filter(
                     (dish) => dish.id === parseInt(match.params.dishId, 10)
                  )[0]
               }               
            />
         );
      };

      const PaymentId = ({match}) => {
         return (
            <PaymentDetail 
            dish={
               this.state.costumes.filter(
                  (dish) => dish.id === parseInt(match.params.dishId, 10)
               )[0]
            }
            />
         )
      }

      return (
         <div className='main'>
            <Header />
            {/* <Menu
               dishes={this.state.dishes}
               onClick={(dishId) => this.onDishSelect(dishId)}
            /> */}
            {/* <DishDetail
               dish={
                  this.state.dishes.filter((dish) => this.state.selectedDish)[0]
               }
            /> */}
            <Switch>
               <Route path="/home" component={HomePage} />
               <Route
                  exact
                  path="/menu"
                  component={() => <Menu costumes={this.state.costumes} />}
               />
               <Route exact path="/contactus" component={Contact} />
               <Route
                  exact
                  path="/aboutus"
                  component={() => <About />}
               />
               <Route path="/menu/:dishId" component={DishWithId} />
               <Route path="/payment"  component={() => <Payment/>}/>
               <Redirect to="/home" />

            </Switch>
            <Footer />
         </div>
      );
   }
}
export default Main;
