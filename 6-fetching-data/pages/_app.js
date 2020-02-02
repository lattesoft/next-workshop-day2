import Layout from "../components/MyLayout"

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

export default MyApp;
