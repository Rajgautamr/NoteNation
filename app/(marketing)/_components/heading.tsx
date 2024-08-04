"use client"
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useConvexAuth } from "convex/react";
import { SignInButton } from "@clerk/clerk-react";
import Loader from "@/components/ui/spinner";

import Link from "next/link";
const Heading = () => {
    const {isAuthenticated, isLoading} = useConvexAuth();
    return ( 
        <div className="max-w-3xl space-x-4">
            <h1 className=" text-3xl sm:text-5xl md:text-6xl font-bold">Your Ideas , Docs & Plans. Unified. Welcome to <span className="underline">Notion</span></h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium py-2">Notion is a connected workspace where better, faster work happens</h3>
            {isLoading &&(
                <div className="pt-5 h-full flex justify-center items-center">
                <Loader/>
            </div>
            )}
            {isAuthenticated && !isLoading &&(
                <Button asChild><Link href="/documents">Enter Notion <ArrowRight className="h-4 w-4 ml-2 "></ArrowRight></Link></Button>   
            )}
            {!isAuthenticated && !isLoading &&(
                <>\
                <SignInButton mode="modal">
                <Button size="sm">Get Notion Free <ArrowRight className="h-4 w-4 ml-2 "/></Button></SignInButton></>
            )}  
        </div>
     );
}
 
export default Heading;