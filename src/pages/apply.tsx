import styled from "styled-components";
import {ImageButtonBase, PageTemplate} from "./main";
import { Alert } from '../layouts/Alert';

export const Apply = () => {
    return (
        <Wrap>
            <img
                src='/assets/3-apply-page.webp'
                alt = 'apply page body'
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
            <div>
                <Button
                    onClick={() =>
                        window.open("https://forms.gle/jLNtSZN1eum4XmP29", "_blank")
                    }
                >
                    <img src="/assets/submit-button.webp" alt="apply submit button" />
                </Button>
                <Button onClick={() => Alert.fire("준비중", "준비중입니다.", "info")}>
                    <img
                        src="/assets/detail-download-button.webp"
                        alt="detail file download button"
                    />
                </Button>
                <Button
                    onClick={() =>
                        window.open(
                            "https://s3.ap-northeast-2.amazonaws.com/aibigdatasec.kr/%5B%EB%8C%80%ED%9A%8C%EC%9A%94%EA%B0%95%5D_%EC%82%AC%EC%9D%B4%EB%B2%84%EB%B3%B4%EC%95%88+AI+%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0+%EC%B1%8C%EB%A6%B0%EC%A7%80+2023.pdf",
                            "_blank"
                        )
                    }
                >
                    <img
                        src="/assets/rule-download-button.webp"
                        alt="rule file download button"
                    />
                </Button>
            </div>
        </Wrap>
    );
}

export const Wrap = styled(PageTemplate)`
    & > div {
        position: absolute;
        display: flex;
        justify-content: center;
        bottom: 74px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        & > button {
            position: static;
            transform: unset;
            margin: 0 8px;
            width: 27%;
        }
    }
`;

const Button = styled(ImageButtonBase)`
    bottom: 182px;
    left: 50%;
    transform: translateX(-50%);
    width: 410px;
`;
