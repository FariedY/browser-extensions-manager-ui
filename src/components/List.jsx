const List = ({ filteredExtensions, handleRemove, handleToggle }) => {
    return (
        <section id="extensions-list" className="flex flex-row justify-start flex-wrap gap-2">
            {filteredExtensions.map((ext) => (
                <div className="card border-card" key={ext.name}>
                    <div id={ext.name} className="flex flex-row justify-start gap-4">
                        <div>
                            <img src={ext.logo} alt="logo" />
                        </div>
                        <div>
                            <h3 className="font-bold text-xl text-neutral-900 dark:text-neutral-0">{ext.name}</h3>
                            <p className='font-normal text-neutral-600 dark:text-neutral-300'>{ext.description}</p>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between items-center">
                        <button onClick={() => handleRemove(ext.name)} className="border-card text-neutral-900 dark:text-neutral-0 h-10 rounded-full px-3 leading-[50%] red-outline">Remove</button>

                        <label className="relative inline-flex items-center cursor-pointer">
                            <input 
                                type="checkbox" 
                                className="sr-only peer" 
                                checked={ext.isActive} 
                                onChange={() => handleToggle(ext.name)} 
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-500 transition-all"></div>
                            <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full peer-checked:translate-x-5 transition-all"></div>
                        </label>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default List;