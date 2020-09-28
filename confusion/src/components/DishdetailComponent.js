import React, {Component} from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

class DishDetail extends Component{

    renderDish(dish){
        if(dish != null){
            return(
                <Card>
                    <CardImg width object src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle heading>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else {
            return(
                <div></div>
            )
        }
    }

    renderComments(dish){
        console.log('COMMENTS!!!!!!');
        if(dish != null) {
            const comments = dish.comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <ul className="list-unstyled">
                            <li>{comment.comment}</li>
                            <li className="list-inline-item">{comment.author}</li>
                            <li className="list-inline-item">{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                        </ul>
                    </div>
                );
            });
            return (
                <div className="">
                    <h4>Comments</h4>
                    {comments}
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    render() {
        const dish = this.props.dish;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">{this.renderDish(dish)}</div>
                    <div className="col-12 col-md-5 m-1">{this.renderComments(dish)}</div>
                </div>
            </div>
        );

    }
}

export default DishDetail;