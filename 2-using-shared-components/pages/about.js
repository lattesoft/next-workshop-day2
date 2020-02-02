import {withLayout} from '../components/layout';

function About() {
  return (
    <div>
        <p>This is the about page</p>
    </div>
  )
}

export default withLayout("view-about")(About);
