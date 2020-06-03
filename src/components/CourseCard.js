import React, { PureComponent } from 'react';
import Badge from './Badge';

function DegreeIcon() {
    return (
        <div className="degree-icon m-0 mr-1">
            <i class="fa fa-graduation-cap" aria-hidden="true"></i>
        </div>
    )
}

export default class CourseCard extends PureComponent {
    render() {
        const { title='', description='', price="", image="", time="", degree=false } = this.props;
        return (
            <div className="course-card">
                <div className="card-inner">
                    <div className="card-image-wrapper">
                        <img className="image" src={image} alt="" />
                    </div>
                    <div className="badge-wrapper">
                        {degree && <Badge className="degree"><DegreeIcon /> DEGREE</Badge>}
                        <Badge className="filled">{time}</Badge>
                    </div>
                    <div className="card-text px-3">
                        <p className="title mb-3">{title}</p>
                        <p className="description mb-3">{description}</p>
                        <p className="price mb-2">{price}</p>
                    </div>
                </div>
            </div>
        )
    }
}