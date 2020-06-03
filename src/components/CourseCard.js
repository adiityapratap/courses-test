import React, { PureComponent } from 'react';
import Badge from './Badge';

export default class CourseCard extends PureComponent {
    render() {
        const { title='', description='', price="", image="", time="", degree=false } = this.props;
        return (
            <div className="course-card">
                <img width={100} height={100} className="image" src={image} alt="" />
                {degree && <Badge className="degree"><img src={require('../assets/images/degree.png')} /> DEGREE</Badge>}
                <Badge className="filled">{time}</Badge>
                <p className="title">{title}</p>
                <p className="description">{description}</p>
                <p className="price">{price}</p>
            </div>
        )
    }
}