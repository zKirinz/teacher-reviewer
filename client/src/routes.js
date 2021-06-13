import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import ReviewPage from './containers/ReviewPage'
import SearchPage from './containers/SearchPage'
import { SlideFade } from '@chakra-ui/react'

const routes = [
    {
        exact: true,
        path: '/',
        component: SearchPage,
    },
    {
        path: '/review/:name',
        component: ReviewPage,
    },
]

const Routes = (
    <Switch>
        {routes.map((route, index) => (
            <Route key={index} exact={route.exact} path={route.path}>
                {({ match }) => {
                    return (
                        <SlideFade
                            offsetX={match.path === '/' ? '-100px' : '100px'}
                            in={match !== null}
                            style={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                overflow: 'hidden',
                            }}
                        >
                            <route.component />
                        </SlideFade>
                    )
                }}
            </Route>
        ))}
        <Redirect to="/" />
    </Switch>
)

export default Routes
