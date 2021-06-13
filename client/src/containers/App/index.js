import { BrowserRouter } from 'react-router-dom'

import Layout from '../../components/Layout'

import Routes from '../../routes'

import { RecoilRoot } from 'recoil'

const App = () => {
    return (
        <BrowserRouter>
            <RecoilRoot>
                <Layout>{Routes}</Layout>
            </RecoilRoot>
        </BrowserRouter>
    )
}

export default App
