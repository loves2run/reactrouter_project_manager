import ProjectList from "./ProjectList";

export default function SearchAddForm() {
    const styles = {
        formField: "rounded-sm px-2.5 py-1 bg-white shadow-md border-2 border-transparent",
        formButton: "text-[1rem] text-[#3992ff]",
        hoverFocusActive: "hover:border-sky-500 focus:border-sky-500 active:border-sky-500"
    };

    return (
        <div className="flex flex-col h-full border-r-2 border-r-gray-400">
            <section
                className="flex gap-2 justify-center align-middle p-6 border-b-2 border-b-gray-400"
            >
                <form 
                    className=""
                    action=""
                >
                    <input 
                        className={`w-full ${styles.formField} ${styles.hoverFocusActive}`}
                        type="search"
                        placeholder="Search" 
                    />
                </form>
                <form 
                    className="shrink-0"
                    action=""
                >
                    <button 
                        className={`${styles.formField} ${styles.formButton} ${styles.hoverFocusActive}`}
                        type="submit"
                    >
                        New
                    </button>
                </form>
            </section>
            <section>
                <ProjectList />
            </section>
            <section
                className="flex justify-center items-center mt-auto py-3 border-t-2 border-t-gray-400"
            >
                <img 
                    className="flex w-full h-auto max-w-28 min-w-16" 
                    src="src/assets/bjd-logo-black.png" 
                    alt="logo for Brandon Johnson Dev" 
                />
            </section>
        </div>    
    )
}