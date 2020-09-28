import React from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";

function RenderDish({dish}){
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

function RenderComments({dishComment}){
    console.log('COMMENTS!!!!!!');
    if(dishComment != null) {
        const comments = dishComment.map((comment) => {
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

const DishDetail = (props) => {
    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1"><RenderDish dish={props.dish}/></div>
                    <div className="col-12 col-md-5 m-1"><RenderComments dishComment={props.dish.comments}/></div>
                </div>
            </div>
        );
    }
    else {
        return(
            <div></div>
        );
    }
}
export default DishDetail;