import { useParams } from 'react-router-dom'
import MainContainer from '../../components/MainContainer'

export default function TrendingPage() {
    const { hashTags } = useParams()

    return (
        <>
            <MainContainer>
                <h1>{hashTags}</h1>
            </MainContainer>
        </>
    )
}