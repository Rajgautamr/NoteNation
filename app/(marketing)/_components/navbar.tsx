"use client"
import { cn } from "@/lib/utils";
import { useScrolltop } from "@/hooks/useScrolltop";
import Logo from "./logo";
import { ModeToggle } from "@/components/ui/modetoggle";

export const Navbar = () => {
    const scrolled = useScrolltop();
    return ( 
        <div className={cn("z-50 bg-background dark:bg-[#1f1f1f] fixed top-0 flex items-center w-full p-6" , scrolled && "border-b shadow-sm")}>
            <Logo/>
            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
                <ModeToggle/>
            </div>
        </div>
        
     );
}
 
export default Navbar;