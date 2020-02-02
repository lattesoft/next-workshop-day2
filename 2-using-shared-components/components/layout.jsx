import Header from './header';

export const withLayout =  () => {
    return Component=>{
        return ()=>(
            <>
                <Header/>
                <p>This is a layout</p>
                <p><Component/></p>
                <p>This is a footer</p>
            </>
        )
    }
}