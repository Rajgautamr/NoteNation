"use client"

import { Doc, Id } from "@/convex/_generated/dataModel";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

interface DocumentListProps{
    parentdocumentId?: ID<"documents">;
    level?: number;
    data?: Doc<"documents"> 
}
const DocumentList = ({
    parentdocumentId,
    level=0
}: DocumentListProps) => {
    const params = useParams();
    const route = useRouter();
    const [expanded , setExpanded] = useState<Record<string , boolean>>({});
    const onexpand =(documentId: string) =>{
        setExpanded(prevExpanded =>({
            ...prevExpanded,
            [documentId]:!prevExpanded[documentId]
        }));
    };

    const document  
    return ( 
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quo quidem pariatur eaque qui tempore numquam cumque rerum, odio maiores?</div>
     );
}
 
export default DocumentList;