


export default function Message({index, avatar, name, entity, event, message, picture, timeAgo, status, setRead}) {
    return (
        <div className={`grid sm:grid-cols-9 grid-cols-5 gap-4 ${ status ? '' : 'bg-neutral-light-grayish-blue-2'} rounded-lg my-2 cursor-pointer`} onClick={()=>setRead(index)} >
            <div className="sm:col-span-1 col-span-1">
            <img src={avatar} alt="avatar" className="rounded-full size-12 m-4" />
            </div>
            <div className="sm:col-span-8 col-span-4 mx-2">
            <div className="mt-5 text-left">
                <div className="flex flex-row justify-between">
                    <div>
                        <a className="text-sm font-bold hover:text-primary-blue" href="#">{name}</a> 
                        <span className="text-sm text-neutral-dark-grayish-blue"> {event} </span>
                        <a href="#" className="text-neutral-dark-grayish-blue hover:text-primary-blue font-semibold text-sm">{entity}</a>
                        { !status && <span className="inline-block w-2 h-2 bg-red-500 rounded-full ml-1"></span>}
                        <p className="text-neutral-grayish-blue text-sm text-left ">{timeAgo}</p>
                    </div>
                    {
                        picture && <img src={picture} alt="picture" className="rounded-lg size-12 mt-1 mr-5" />
                    }
                </div>
                
            </div>
            {
                message && 
            <div className="rounded-sm border-[1px] border-neutral-light-grayish-blue-2 my-2 group">
                <p className="p-3 text-neutral-dark-grayish-blue text-sm  text-left group-hover:bg-neutral-light-grayish-blue-2">{message}</p>
            </div>
            }
               
            </div>
        </div>
        );
}