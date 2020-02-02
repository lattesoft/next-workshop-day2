import Layout from "../components/MyLayout"
import store from '../redux/store'
import {Provider} from 'react-redux'
import App, {Container} from 'next/app'
import withRedux from 'next-redux-wrapper'
import compose from 'recompose/compose';

class MyApp extends App {
    render() {
        return (
            <Container>
                <Provider store={store}>
                    <Layout/>
                </Provider>
            </Container>
        )
    }
}

export default compose(
    withRedux(initStore),
)(MyApp)
