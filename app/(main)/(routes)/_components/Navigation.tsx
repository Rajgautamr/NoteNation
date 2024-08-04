const Navigation = () => {
    return ( 
        <>
        <aside className="h-full group/sidebar bg-secondary overflow-y-auto relative flex w-60 flex-col z-[99999]">
            <div>
                <p>Action items</p>
            </div>
            <div className="mt-4">
                <p>Documents</p>
            </div>
            <div className="opacity-0 group-hover/sidebar-hover:opacity-100" />
        </aside>
        </>
     );
}
 
export default Navigation;