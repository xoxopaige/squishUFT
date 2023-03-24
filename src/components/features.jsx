const Features = () => {
    
    return(
    <div className='flex flex-row'>
        <div className='flex flex-row space-x-4'>
            <div>
                <div className='rounded-full bg-green-400 h-10 w-10
                    flex items-center justify-center'>
                    1
                </div>
            </div>
            <div className='basis-2/6'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
            <div className='basis-3/6 shadow-xl'>
                <img src={placeholder} style={{ width: 500, height: 300 }} />
            </div>
        </div>
        <div className='flex flex-row space-x-4'>
            <div>
                <div className='rounded-full bg-green-400 h-10 w-10
                    flex items-center justify-center'>
                    1
                </div>
            </div>
            <div className='basis-3/6 shadow-xl'>
                <img src={placeholder} />
            </div>
            <div className='basis-2/6'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
        </div>
        <div className='flex flex-row space-x-4'>
            <div>
                <div className='rounded-full bg-green-400 h-10 w-10
                    flex items-center justify-center'>
                    1
                </div>
            </div>
            <div className='basis-2/6'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
            <div className='basis-3/6 shadow-xl'>
                <img src={placeholder} />
            </div>
        </div>
    </div>
    )
}

export default Features;