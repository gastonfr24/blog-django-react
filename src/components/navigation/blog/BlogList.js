import { useEffect } from "react"
import { connect } from "react-redux"
import { get_blog_list, get_blog_list_page } from "redux/actions/blog"

const BlogList=({
    blog_list,
    get_blog_list,
    get_blog_list_page}) =>{


    useEffect(() => {
        get_blog_list()
    }, [])
    
    
    return(
        <div>
            BlogList
        </div>
    )
}

const mapToStateProps = state =>({
    blog_list : state.blog.blog_list
})

export default connect(mapToStateProps,{
    get_blog_list,
    get_blog_list_page
})(BlogList)