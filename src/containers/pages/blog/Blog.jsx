import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";
import { useEffect } from "react";
import BlogList from "components/navigation/blog/BlogList";
import Header from "components/navigation/blog/Header";

function Blog (
   {}
     ){

    
    useEffect(()=>{

    },[])

    return(
        <FullWidthLayout>
           <Header/>
           <BlogList/>
        </FullWidthLayout>
    )
}

const mapStateToProps = state =>({

})

export default connect(mapStateToProps,{

})(Blog);
