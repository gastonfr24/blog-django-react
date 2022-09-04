import { Link } from "react-router-dom"

const BlogCard =(data) =>{

    let post= data && data.data

    return(

        <div>
     <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={post.thubnail} alt="" />
    </div>
    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
    <div className="flex-1">
        <p className="text-sm font-medium text-indigo-600">
        <Link to={`/blog/category/${post.category.id}`} className="hover:underline">
            {post.category.name}
        </Link>
        </p>
        <Link to={`/blog/post/${post.slug}`} className="block mt-2">
        <p className="text-xl font-semibold text-gray-900">{post.title}</p>
        <p className="mt-3 text-base text-gray-500">description</p>
        </Link>
    </div>
    <div className="mt-6 flex items-center">
        <div className="flex-shrink-0">
        <Link to="#">
            <span className="sr-only">author namme</span>
            <img className="h-10 w-10 rounded-full" src="#" alt="" />
        </Link>
        </div>
        <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">
            <Link to="#" className="hover:underline">
            author namme
            </Link>
        </p>
        <div className="flex space-x-1 text-sm text-gray-500">
            <time>date</time>
            <span aria-hidden="true">&middot;</span>
            <span>rread time</span>
        </div>
        </div>
    </div>
    </div>
</div>
     </div>
    )
}

export default BlogCard