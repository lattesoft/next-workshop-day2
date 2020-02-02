import Header from './header';

export const withLayout =  (permission) => { 
    return Component=>{
        return ()=>{
            console.log(permission);
            return <>
                <Header/>
                <p>This is a layout</p>
                <Component/>
                <p>This is a footer</p>
            </>
            
        }
    }
}