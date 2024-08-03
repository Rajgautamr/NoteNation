import Image from "next/image";

const Heroes = () => {
    return ( 
        <div className="flex flex-col justify-center items-center max-w-5xl">
            <div className="flex items-center gap-3">
                <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
                    <Image src="/Group.png" fill className="object-contain" alt="Doc"/>
                </div>
                <div className="relative w-[350px] h-[350px] hidden md:block dark:hidden">
                    <Image src="/OBJECTS.png" fill className="object-contain" alt="reading"/>
                </div>
            </div>
        </div>
     );
}
 
export default Heroes;