import styled from "styled-components";
import {PageTemplate, ImageButtonBase} from "./main";

export const Award = () => {
    return (
        <Wrap>
            <img
                src="/assets/4-award-page.webp"
                alt="award page"
            />
            <Button
                onClick={() => (
                    window.open("https://www.youtube.com/watch?v=wh50f4cV7DM", "_blank")
                )}
            >
                <img
                    src='/assets/detail-video-button-2.webp'
                    alt='go watch explain video button'
                />
            </Button>
        </Wrap>
    )
};

const Wrap = styled(PageTemplate)``;
const Button = styled(ImageButtonBase)`
    bottom: 55px;
    left: 50%;
    transform: translateX(-50%);
    width: 410px;
`;
