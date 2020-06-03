import React, { PureComponent } from 'react';
import CourseCard from '../components/CourseCard';
import CategoryCard from '../components/CategoryCard';
import { Container, Row, Col } from 'react-bootstrap';
import { categories, courses } from '../constants';
import Slider from 'react-slick';

export default class LearningCenter extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            active: "Development"
        }
    }

    onCourseSelect = (category) => () => {
        this.setState({
            active: category.title
        });
    }

    render() {

        const { active="" } = this.state;

        const selectedCourses = courses[active];
        
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ] 
        };

        return (
            <Container>
                <div className="my-5">
                    <Row>
                        <Col>
                            <h4 className="learn-header">Learn what fascinates you</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="category-container">
                            {
                                categories.map(category => {
                                    return (
                                        <CategoryCard key={category.title} onCourseSelect={this.onCourseSelect(category)} {...category} active={active} />
                                    )
                                })
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Slider className="course-slider" {...settings}>
                                {
                                    selectedCourses.map(course => {
                                        return (
                                            <CourseCard {...course} key={course.title} />
                                        )       
                                    })
                                }
                            </Slider>
                        </Col>
                    </Row>
                </div>
            </Container>
        )
    }
}