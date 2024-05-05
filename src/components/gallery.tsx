import {Component} from "react";
import ImageGallery from "react-image-gallery";

const images = [
    {
        original: "/assets/gallery/0.jpeg",
        thumbnail: "/assets/gallery/0.jpeg",
        originalHeight: 700,
    },
    {
        original: "/assets/gallery/1.jpg",
        thumbnail: "/assets/gallery/1.jpg",
        originalHeight: 700,
    },
    {
        original: "/assets/gallery/2.jpeg",
        thumbnail: "/assets/gallery/2.jpeg",
        originalHeight: 700,
    },
    {
        original: "/assets/gallery/3.jpg",
        thumbnail: "/assets/gallery/3.jpg",
        originalHeight: 700,
    },
    {
        original: "/assets/gallery/4.jpg",
        thumbnail: "/assets/gallery/4.jpg",
        originalHeight: 700,
    },
    {
        original: "/assets/gallery/5.jpg",
        thumbnail: "/assets/gallery/5.jpg",
        originalHeight: 700,
    },
    {
        original: "/assets/gallery/6.jpg",
        thumbnail: "/assets/gallery/6.jpg",
        originalHeight: 700,
    },
    {
        original: "/assets/gallery/7.jpg",
        thumbnail: "/assets/gallery/7.jpg",
        originalHeight: 700,
    },
    {
        original: "/assets/gallery/8.jpg",
        thumbnail: "/assets/gallery/8.jpg",
        originalHeight: 700,
    },
    {
        original: "/assets/gallery/9.jpg",
        thumbnail: "/assets/gallery/9.jpg",
        originalHeight: 700,
    },
    {
        original: "/assets/gallery/10.jpg",
        thumbnail: "/assets/gallery/10.jpg",
        originalHeight: 700,
    },
];

export class Gallery extends Component {
    render() {
        return <ImageGallery
            items={images}
            showFullscreenButton={false}
            autoPlay={true}
        />;
    }
}