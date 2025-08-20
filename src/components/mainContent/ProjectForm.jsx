
const styles = {
    formField: "rounded-sm px-2.5 py-1 border-2 border-gray-200",
    formButton: "text-[1rem]",
    saveButton: "text-white bg-[#3992ff] hover:bg-white hover:text-[#3992ff] hover:border-gray-300 focus:bg-white focus:text-text-[#3992ff] focus:border-gray-300 active:bg-white active: text-text-[#3992ff] active:border-gray-300",
    hoverFocusActive: "hover:border-sky-500 focus:border-sky-500 active:border-sky-500",
    formLabel: "flex flex-col gap-1",
};

export default function AddEditProjectForm() {

    return (
        <div className="border-2 border-gray-300">
            <form 
                className="flex flex-col w-full p-2"
                action=""
            >
                <h1 className="font-bold text-lg">Add / Edit Project</h1>
                <div className="mb-1.5">
                    <section>
                        <label 
                            className={`${styles.formLabel} ${styles.hoverFocusActive}`}
                            htmlFor=""
                        >
                            Project Name
                            <input  
                                className={`${styles.formField} ${styles.hoverFocusActive}`}
                                type="text"
                            />
                        </label>
                    </section>
                    <section>
                        <label 
                            className={styles.formLabel}
                            htmlFor=""
                        >
                            Description
                            <textarea 
                                className={`${styles.formField} ${styles.hoverFocusActive}`}
                                name="" 
                                id="" 
                                cols="10" 
                                rows="3"
                                ></textarea>
                        </label>
                    </section>
                    <section>
                        <label 
                            className={styles.formLabel}
                            htmlFor=""
                        >
                            Due Date
                            <input 
                                className={`${styles.formField} ${styles.hoverFocusActive}`}
                                type="date"
                            />
                        </label>
                    </section>
                </div>
                <div className="flex justify-end gap-2">
                    <button 
                        className={`${styles.formButton} ${styles.formField} ${styles.hoverFocusActive} bg-gray-300`}
                        type="button"
                    >
                        Cancel
                    </button>
                    <button
                        className={`${styles.formButton} ${styles.formField} ${styles.saveButton}`}
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}