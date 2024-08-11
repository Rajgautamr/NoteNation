"use client"

import { Id } from "@/convex/_generated/dataModel";
import { ChevronDown, ChevronRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface ItemProps{
    id?: Id<"documents">;
    documenticon?: string;
    expanded?: boolean;
    active?: boolean;
    isSearch?: boolean;
    level?: number;
    onExpant?: () => void;
    label: string;
    onClick: ()=> void;
    icon: LucideIcon;
}
const Item = ({
    id,
    level =0,
    active,
    isSearch,
    expanded,
    onExpant,
    documenticon,
    label,
    onClick,
    icon: Icon}: ItemProps
) => {

    const ChevronIcon = expanded? ChevronDown : ChevronRight;
    return ( 
        <div onClick={onClick} role="button" style={{paddingLeft: level ? `${(level * 12) +12}px` : "12px"}} className= {cn("flex items-center group min-h-[27px] text-sm py-1 pr-3 w-full hover:bg-primary/5 text-muted-foreground font-medium", active && "bg-primary/5 text-primary")}>
            {!!id && (
                <div role="button" className="h-full rounded-sm hover:bg-neutral-300 dark:bg-neutral-600 mr-1" onClick={() => {}}><ChevronIcon className="h-4 w-4 shrink-0 text-muted-foreground/50"/></div>)
            }
            {documenticon ? (
                <div className="shrink-0 mr-2 text-[18px]"> {documenticon}</div>
            ) : (
            <Icon className="shrink-0 h-[18px] mr-2 text-muted-foreground  "/>
            )}
            <span className="truncate">{label}</span>
            {isSearch &&(
                <kbd className="ml-auto pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] text-muted-foreground font-medium"><span className="text-xs">Ctrl+ K</span></kbd>
            )}
            </div>
     );
}
 
export default Item;

Item.Skeleton = function ItemSkeleton({level} : {level?: number}){
    return (
        <div style={{paddingLeft: level ? `${(level * 12) +25}px` : "12px  "}} className="flex gap-x-2 py-[3px]">
            <Skeleton className="h-4 w-4"/>
            <Skeleton className="h-4 w-[30%]"/>
        </div>
    )
}