import styled from "styled-components";
import {ImageButtonBase, PageTemplate} from "./main";

export const Schedule = () => {
    return (
        <Wrap>
            <img
                src='/assets/4-schedule-page.webp'
                alt='schedule page body'
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

export const Wrap = styled(PageTemplate)``;

const Button = styled(ImageButtonBase)`
    bottom: 70px;
    left: 50%;
    transform: translateX(-50%);
    width: 410px;
`;
