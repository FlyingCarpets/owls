import React, { Component } from 'react';

import { Consumer } from './store';

export function withContext(WrappedComponent) {
    return class ComponentWithContext extends Component {
        render() {
            return (
                <Consumer>
                    { context => <WrappedComponent { ...context } /> }
                </Consumer>
            );
        }
    }
}
