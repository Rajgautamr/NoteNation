import { ChevronsLeft, MenuIcon, PlusCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import {ElementRef, useEffect, useRef, useState } from "react";
import {useMediaQuery} from "usehooks-ts";
import UserData from "./Userdata";
import Item from "./Item";

import { cn } from "@/lib/utils";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
const Navigation = () => {
    const documents = useQuery(api.documents.get);
    const create = useMutation(api.documents.create);
    const pathname = usePathname();
    const isMobile = useMediaQuery("(max-width: 768px)");
    const isResizingRef = useRef(false);
    const sidebarRef = useRef<ElementRef<"aside">>(null);
    const navbarRef = useRef<ElementRef<"div">>(null);
    const [isResetting , setIsResetting] = useState(false);
    const [isCollapsed , setIsCollapsed] = useState(isMobile);

    useEffect(() =>{
        if(isMobile){
            collapse();
        }
        else{ resetwidth();
        }
    } ,[isMobile]);
    useEffect(() =>{
        if(isMobile){
            collapse();
        }
    } ,[isMobile, pathname]);

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
        event.preventDefault();
        event.stopPropagation();

        isResizingRef.current = true;
        document.addEventListener("mousemove",handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    }

    const handleMouseMove = (event:MouseEvent) =>{
        if(!isResizingRef.current) return;
        let newwidth = event.clientX;
        if(newwidth<240) newwidth = 240;
        if(newwidth>460) newwidth = 460;

        if(sidebarRef.current && navbarRef.current){
            sidebarRef.current.style.width = `${newwidth}px`;
            navbarRef.current.style.setProperty("left" ,`${newwidth}px`);
            navbarRef.current.style.setProperty("width" , `calc(100%-${newwidth}px)`);
        }
    }

    const handleMouseUp = () =>{
        isResizingRef.current = false;
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup" , handleMouseUp);
    }

    const resetwidth = () =>{
        if(sidebarRef.current && navbarRef.current){
            setIsCollapsed(false);
            setIsResetting(true);
        sidebarRef.current.style.width = isMobile ? "100%" : "240px";
        navbarRef.current.style.setProperty("width" , isMobile ? "0" : "calc(100%-240px)");
        navbarRef.current.style.setProperty("left" , isMobile ? "100%" : "240px");
        setTimeout(() => setIsResetting(false) ,300);}
    }


    const collapse = () =>{
        if(sidebarRef.current && navbarRef.current){
            setIsCollapsed(true);
            setIsResetting(true);
        sidebarRef.current.style.width = "0";
        navbarRef.current.style.setProperty("width" , "100%");
        navbarRef.current.style.setProperty("left" ,"0");
        setTimeout(() => setIsResetting(false) ,300);}
    }

    const handlecreate = () => {
        const promise = create({title: "Untitled"});

        toast.promise(promise, {
            loading: "Creating a new Note",
            success: "Note created successfully",
            error: "Oops! Something went wrong"
        })
    }
    return ( 
        <>
        <aside ref={sidebarRef} className={cn("h-full group/sidebar bg-secondary overflow-y-auto relative flex w-60 flex-col z-[99999]", isResetting && "transition-all ease-in-out duration-300", isMobile && "w-0") }>
            <div role="button" onClick={collapse} className={cn("h-6 w-6 text-muted-foreground round-sm opacity-0 hover:bg-neutral-300 dark:bg-neutral-600 absolute top-3 right-2 group-hover/sidebar:opacity-100 transition", isMobile && "opacity-100")}>
                <ChevronsLeft className="h-6 w-6"/>
            </div>
            <div>
                <UserData/>
                <Item onClick={handlecreate} label="New Page" icon={PlusCircle}/>
            </div>
            <div className="mt-4">
                {documents?.map((document) =>(
                    <p>{document.title}</p>)
                )}
            </div>
            <div onMouseDown={handleMouseDown}  onClick={resetwidth} className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0" />
        </aside>
        <div ref={navbarRef} className={cn("absolute top-0 z-[99999] left-60 w-[calc(100%-240px)]", isResetting && "transition-all ease-in-out duration-300", isMobile && "left-0 w-full")}>
            <nav className="bg-transparent px-3 py-2 w-full"> {isCollapsed && <MenuIcon onClick={resetwidth} role="button" className="h-6 w-6 text-muted-foreground"/>}</nav>
        </div>
        </>
     );
}
 
export default Navigation;