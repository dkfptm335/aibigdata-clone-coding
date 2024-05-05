import styled from "styled-components";

export const Main = () => {
    return (
        <Wrap>
            <img
                src='/assets/1-main-page.webp'
                alt='main page body'
            />
            <Button
                onClick={() => (
                    window.open("https://forms.gle/K5hj4h44F2H88cGj8", "_blank")
                )}
            >
                <img
                    src='/assets/1-main-button.png'
                    alt='go preRegister form button'
                />
            </Button>
        </Wrap>
    )
};

export const PageTemplate = styled.section`
    position: relative;
    & > img {
        width: 100%;
    }
`;

const Wrap = styled(PageTemplate)``;

export const ImageButtonBase = styled.button`
    background-color: transparent;
    border: none;
    position: absolute;
    cursor: pointer;
    & > img {
        width: 100%;
    }
`;

const Button = styled(ImageButtonBase)`
    bottom: 168px;
    left: 50%;
    transform: translateX(-50%);
    width: 1140px;
`;
