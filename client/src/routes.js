import React, { lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { SlideFade } from '@chakra-ui/react'

const routes = [
    {
        exact: true,
        path: '/',
        component: lazy(() => import('./containers/SearchPage')),
    },
    {
        path: '/review/:name',
        component: lazy(() => import('./containers/ReviewPage')),
    },
]

const Routes = (
    <Suspense fallback={<p>Loading...</p>}>
        <Switch>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    exact={route.exact}
                    path={route.path}
                    render={({ match }) => {
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
                ></Route>
            ))}
            <Redirect to="/" />
        </Switch>
    </Suspense>
)

export default Routes
