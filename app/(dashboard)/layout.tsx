import Navbar from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { DropdownMenuBar } from "@/components/DropdownMenuBar";


const DashboardLayout = async ({
  children,
}: {
  children: React.ReactNode
}) => {
 

  return ( 
    <div className="h-full relative">
      <div className="flex w-full justify-end">
        <div className="mr-5"><DropdownMenuBar/></div>
        <div><UserMenu/>

        </div>
 
      </div>
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
        <Sidebar />
      </div>
      <main className="md:pl-72 pb-10">
        <Navbar />
        {children}
      </main>
    </div>
   );
}
 
export default DashboardLayout;
