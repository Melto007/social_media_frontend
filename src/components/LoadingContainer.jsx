import MainContainer from "./MainContainer";

export default function LoadingComponent(props) {
    return (
        <>
            <MainContainer className="bg-neutral-900 h-[100vh]">
                <div className='flex justify-center items-center translate-y-[10em]'>
                    {props.children}
                </div>
            </MainContainer>
        </>
    )
}