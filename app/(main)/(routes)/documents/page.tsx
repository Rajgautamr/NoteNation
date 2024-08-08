"use client"
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import {toast } from "sonner";
import { PlusCircle } from "lucide-react";
import Image from "next/image";



const DocumentsPg = () => {
    const {user} = useUser();
    const create = useMutation(api.documents.create);


    const onCreate = () =>{
        const promise = create({title : "Untitled"});
        toast.promise(promise, {
            loading: "Creating a new note...",
            success: "Note created successfully",
            error: "Oops!! Something went wrong"
        })
     }
    return (
        
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image src="/empty.png" height="400" width="400" alt="empty" className="dark:hidden"/>
            <Image src="/emptydark.png" height="400" width="400" alt="empty" className="hidden  dark:block"/>
            <h2 className="text-lg  font-bold">Welcome to {user?.firstName}&apos;s Notion</h2>
            <Button onClick={onCreate}> <PlusCircle className="h-4 w-4 mr-2"/> Create a note</Button>
             </div>
     );
}
 
export default DocumentsPg;