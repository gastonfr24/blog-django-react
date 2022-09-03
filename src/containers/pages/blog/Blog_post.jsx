import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


function BlogPost (
   {  get_blog }
     ){

    const params = useParams()
    const slug = params.slug
    useEffect(()=>{
        get_blog()
    },[])

    return(
        <FullWidthLayout>
           BlogPost
        </FullWidthLayout>
    )
}

const mapStateToProps = state =>({
    blog_list : state.blog.blog_list
})

export default connect(mapStateToProps,{


})(BlogPost);
