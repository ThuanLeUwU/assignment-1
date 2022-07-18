import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./MenuComponent";
import DishDetail from "./CostumedetailComponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
// import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Redirect, Route, Switch } from "react-router-dom";
import Contact from "./ContactComponent";
import About from "./AboutusComponents";
import { COSTUMES } from "../shared/costumes";
class Main extends Component {
   constructor(props) {
      super(props);
      this.state = {
         dishes: DISHES,
         costumes: COSTUMES,
         comments: COMMENTS,
         // promotions: PROMOTIONS,
         leaders: LEADERS,
      };
   }
   // onDishSelect(dishId) {
   //    this.setState({ selectedDish: dishId });
   // }
   render() {
      const HomePage = () => {
         return (
            <Home
               dish={this.state.dishes.filter((dish) => dish.featured)[0]}
               // promotion={
               //    this.state.promotions.filter(
               //       (promotion) => promotion.featured
               //    )[0]
               // }
               leader={
                  this.state.leaders.filter((leader) => leader.featured)[0]
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
               comments={this.state.comments.filter(
                  (comment) =>
                     comment.dishId === parseInt(match.params.dishId, 10)
               )}
            />
         );
      };
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
                  component={() => <About leaders={this.state.leaders} />}
               />
               <Route path="/menu/:dishId" component={DishWithId} />
               <Redirect to="/home" />
            </Switch>
            <Footer />
         </div>
      );
   }
}
export default Main;
