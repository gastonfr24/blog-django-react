import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { get_blog_list_category, get_blog_list_category_page } from "redux/actions/blog"
import FullWidthLayout from "hocs/layouts/FullWidthLayout"

import BlogCategoryList from "components/blog/BlogCategoryList"

const BlogCategory=({
    get_blog_list_category,
    blog_list,
    count,
    get_blog_list_category_page
}) =>{

    const params = useParams()
    const category_id = params.category_id

    useEffect(() => {
        get_blog_list_category(category_id)
    }, [])
    

    return(
        <FullWidthLayout>
                    
          <BlogCategoryList blog_list={blog_list && blog_list} category_id={category_id}
           cout={count && count} get_blog_list_page={get_blog_list_category_page}/>
       
        </FullWidthLayout>
    )
}

const mapStateToProps = state =>({
    blog_list: state.blog.blog_list_category,
    count: state.count
})

export default connect(mapStateToProps,{
    get_blog_list_category,
    get_blog_list_category_page
})(BlogCategory)