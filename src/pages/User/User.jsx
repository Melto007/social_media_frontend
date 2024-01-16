import ButtonComponent from "../../components/ButtonComponent";
import Container from "../../components/Container";
import DividerComponent from "../../components/DividerComponent";
import Icon from "../../components/Icon";
import MainContainer from "../../components/MainContainer";

export default function User() {
    return (
        <>
            <Container>
                <MainContainer>
                    <div className="grid grid-cols-2">
                        <div>
                            <Icon icon="twitter-icon" />
                        </div>
                        <div>
                            <div>
                                <h1>Happening now</h1>
                                <h1>Join today.</h1>
                                <ButtonComponent radius="full" />
                                <ButtonComponent radius="full" />
                            </div>
                            <div>
                                <span><DividerComponent /></span>
                                <span>or</span>
                                <span><DividerComponent /></span>
                            </div>
                            <div>
                                <ButtonComponent name="Create account" className="font-bold" radius="full" />
                                <p>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
                            </div>
                            <div>
                                <p>Already have an account?</p>
                                <ButtonComponent name="Sign in" className="font-bold border-solid border-1 border-gray-600" variant="bordered" radius="full" />
                            </div>
                        </div>
                    </div>
                </MainContainer>
            </Container>
        </>
    )
}