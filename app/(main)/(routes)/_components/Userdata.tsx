"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { SignOutButton, useUser} from "@clerk/clerk-react";
import { ChevronsLeftRight} from "lucide-react";
export const UserData = () => {
    const {user} = useUser();
    return ( 
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="flex p-3 items-center w-full text-sm hover:bg-primary-50">
                    <div className="gap-x-2 flex items-center max-w-[150px]">
                        <Avatar className="h-6 w-6">
                            <AvatarImage src={user?.imageUrl}></AvatarImage>
                            
                        </Avatar>
                        <span className=" ml-2 text-start font-medium line-clamp-1">{user?.firstName}&apos;s Notion</span>
                    </div>
                    <ChevronsLeftRight className="h-4 w-4 rotate-90 ml-2 text-muted-foreground "></ChevronsLeftRight>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80" align="start" alignOffset={11} forceMount>
                <div className="flex space-y-4 flex-col p-2">
                    <p className=" text-xs pl-2 font-medium text-muted-foreground">{user?.emailAddresses[0].emailAddress}</p>
                    <div className="flex gap-x-2 items-center">
                        <div className=" rounded-md bg-secondary p-1">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src={user?.imageUrl}></AvatarImage>
                            </Avatar>
                            
                        </div>
                        <div className="space-y-1">
                                <p className="text-sm line-clamp-1">{user?.firstName}&apos;s Notion</p>
                            </div>
                    </div>
                </div>
                <DropdownMenuSeparator/>
                <DropdownMenuItem className="ml-2 hover:bg-neutral-100">
                    <SignOutButton ></SignOutButton>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
     );
}
 
export default UserData;