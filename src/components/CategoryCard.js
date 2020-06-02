import React, { PureComponent } from 'react';

export default class CourseCard extends PureComponent {
    render() {

        const { title="", icon="", active="", onCourseSelect } = this.props;

        return (
            <div onClick={onCourseSelect} className={`category-card d-flex align-items-center flex-column ${active === title ? 'active' : ''}`} key={title}>
                <i className={icon}></i>
                {title}
            </div>
        )
    }
}