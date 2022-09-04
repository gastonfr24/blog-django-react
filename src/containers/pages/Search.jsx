import { connect } from "react-redux";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { search_blog } from "redux/actions/blog";


const Search =({search_blog}) =>{


    const params = useParams()
    const term = params.term

    useEffect(() => {
   
        search_blog(term)

    }, [])
    

    return(
        <FullWidthLayout>
        
{term}
        
        </FullWidthLayout>
    )
}

const mapStateToProps = state =>({
    posts: state.blog.filtered_posts
})

export default connect(mapStateToProps,{
search_blog
})(Search)
