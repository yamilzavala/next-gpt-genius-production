import { FaBarsStaggered } from 'react-icons/fa6';
import Sidebar from "@/components/Sidebar";

const DasboardLayout = ({children}) => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content">
                {/* Page content here */}                 
                <label htmlFor="my-drawer-2" className="drawer-button lg:hidden fixed top-6 right-6">
                    <FaBarsStaggered className="w-8 h-8 text-primary"/>
                </label>   
                <div className="bg-base-200 px-8 py-12 min-h-screen flex items-center justify-center">
                    {children}                
                </div>   
            </div> 
            
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>                                  
                {/* Sidebar content here */}
                <Sidebar/>                          
            </div>
        </div>
    );
};

export default DasboardLayout;