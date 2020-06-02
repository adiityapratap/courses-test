import React, { PureComponent } from 'react';
import Badge from './Badge';

export default class CourseCard extends PureComponent {
    render() {
        const { title='', description='', price="", image="", time="", degree=false } = this.props;
        return (
            <div className="course-card">
                <img width={100} height={100} className="course-image" src={image} alt="" />
                {degree && <Badge>DEGREE</Badge>}
                <Badge>{time}</Badge>
                <p style={{marginTop: 100}}>{title}</p>
                <p>{description}</p>
                <p>{price}</p>
            </div>
        )
    }
}