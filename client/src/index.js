import React from 'react'
import ReactDOM from 'react-dom'

import App from './containers/App'
import { ChakraProvider } from '@chakra-ui/react'

import './index.css'

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
