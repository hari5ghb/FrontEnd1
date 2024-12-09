import Navbar from "../Components/Navbar";

const RootLayout = () =>{

    return(
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );

}
export default RootLayout