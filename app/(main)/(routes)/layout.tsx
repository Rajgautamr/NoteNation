"use client"

import Loader from "@/components/ui/spinner";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import Navigation from "./_components/Navigation";

const Mainlayout = ({children}: {children: React.ReactNode;}) => {

    const {isAuthenticated, isLoading} = useConvexAuth();
    if(isLoading) {
        return (
            <div className="h-full flex justify-center items-center">
                <Loader/>
            </div>
        )
    }
    if(!isAuthenticated){
        return redirect("/");
    }
    return ( 
        <div className="h-full flex dark:bg-[#1f1f1f]">
            <Navigation/>
            <main className="h-full flex-1 overflow-y-hidden">{children}</main>
        </div>
     );
}
 
export default Mainlayout;