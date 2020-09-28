import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

//Funtional component
function RenderMenuItem({dish, onClick}){
    return(
        <Card onClick={() => onClick(dish.id)}>
            <CardImg width object src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle heading>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}
//Another way to declare Funtional component
const Menu = (props) =>{
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} onClick={props.onClick}/>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">{menu}</div>
            {/*{this.renderDish(this.state.selectedDish)};*/}
        </div>
    );
}



export default Menu;