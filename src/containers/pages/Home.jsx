import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";


function Home (
   {}
     ){

    return(
        <FullWidthLayout>
            Home
        </FullWidthLayout>
    )
}

const mapStateToProps = state =>({
    blog_list : state.blog.blog_list
})

export default connect(mapStateToProps,{
})(Home);