import { Outlet } from "react-router-dom";
import Blog from "../Pages/Blog";

const BlogLayout = () =>{

    return(
        <div>
            <Blog/>
            <Outlet/>
        </div>
    );
}
export default BlogLayout;