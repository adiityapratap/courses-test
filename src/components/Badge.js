import React, { PureComponent } from 'react';

export default class Badge extends PureComponent {
    render() {

        const { children=[], className='' } = this.props;

        return (
            <div className={`badge pull-right ${className}`}>
                {children}
            </div>
        )
    }
}