

const Title = ({ filter, setFilter }) => {
    return (
        <section id="title" className="px-0 flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:gap-0 mx-1">
            <div className="flex flex-col gap-1">
                <h2 className="text-3xl text-neutral-900 dark:text-neutral-0 font-bold">Extensions List</h2>
            </div>

            <div className="flex flex-row gap-2">
                <a href="#" 
                    onClick={() => setFilter("all")}
                    className={`filter font-medium border-card btn-background red-outline ${filter === "all" ? "active" : ""}`}
                >all</a>
                <a href="#" 
                    onClick={() => setFilter("active")}
                    className={`filter font-medium border-card btn-background red-outline ${filter === "active" ? "active" : ""}`}
                >Active</a>
                <a href="#" 
                    onClick={() => setFilter("inactive")}
                    className={`filter font-medium border-card btn-background red-outline ${filter === "inactive" ? "active" : ""}`}
                >Inactive</a>
            </div>
        </section>
    );
};

export default Title;