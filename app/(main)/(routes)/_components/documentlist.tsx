"use client"

import { Doc, Id } from "@/convex/_generated/dataModel";
import { useParams, useRouter } from "next/navigation";

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
    return ( 
        <div>s</div>
     );
}
 
export default DocumentList;