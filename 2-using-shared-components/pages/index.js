import {withLayout} from '../components/layout';

function Index() {
  return (
    <div>
        <>
          <p>Hello Next.js</p>
          <p>Hello Next.js</p>
        </>
    </div>
  )
}

export default withLayout("view-index")(Index);
