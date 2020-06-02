import React, { PureComponent } from 'react';

export default class Badge extends PureComponent {
    render() {
        return (
            <div className="badge pull-right full-width">
                {this.props.children}
            </div>
        )
    }
}