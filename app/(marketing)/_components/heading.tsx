"use client"
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const Heading = () => {
    return ( 
        <div className="max-w-3xl space-x-4">
            <h1 className=" text-3xl sm:text-5xl md:text-6xl font-bold">Your Ideas , Docs & Plans. Unified. Welcome to <span className="underline">Notion</span></h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium py-2">Notion is a connected workspace where better, faster work happens</h3>
            <Button className="">Enter Notion <ArrowRight className="h-4 w-4 ml-2 "></ArrowRight></Button>     
        </div>
     );
}
 
export default Heading;