import { useState , useEffect } from "react";


export const useScrolltop = (threshold =10) => {
    const [scroll , setScrolled] = useState(false);
    useEffect(()=> {
        const handleScroll = () => {
            if(window.scrollY >threshold){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        };
        window.addEventListener("scroll",handleScroll);
        return ()=> window.removeEventListener("scroll", handleScroll);
    },[threshold]);

    return scroll;
}