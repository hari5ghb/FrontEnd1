import { Outlet } from "react-router-dom";
import OurService from "../Pages/OurService";

const ServiceLayout = () =>{

    return(
        <div>
            <OurService/>
            <Outlet/>
        </div>
    );
}
export default ServiceLayout;