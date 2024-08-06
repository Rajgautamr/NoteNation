"use client"
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
export const DocumentsPg = () => {
    const {user} = useUser();
    return (
        
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image src="/empty.png" height="400" width="400" alt="empty" className="dark:hidden"/>
            <Image src="/emptydark.png" height="400" width="400" alt="empty" className="hidden  dark:block"/>
            <h2 className="text-lg  font-bold">Welcome to {user?.firstName}&apos;s Notion</h2>
            <Button> <PlusCircle className="h-4 w-4 mr-2"/> Create a note</Button>
             </div>
     );
}
 
export default DocumentsPg;