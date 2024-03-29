export default function MainContainer(props) {
    return (
        <>
            <div className='bg-neutral-900 h-auto' {...props}>
                <div className='px-4 py-2'>
                    {props.children}
                </div>
            </div>
        </>
    )
}