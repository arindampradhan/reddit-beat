import React from 'react';
import { Route } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import uuid from 'uuid/v4'

const RouteContainer = posed.div({
    enter: { opacity: 1, delay: 100, beforeChildren: true },
    exit: { opacity: 0 }
});

const PosedRouter = ({children}) => (
    <Route
        render={({ location }) => (
            <PoseGroup>
                <RouteContainer key={uuid()}>
                    {children}
                </RouteContainer>
            </PoseGroup>
        )}
    />
);

export default PosedRouter