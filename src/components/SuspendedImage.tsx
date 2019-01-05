import { unstable_createResource } from "react-cache";
import React from 'react'

interface Props {
    src: string
    alt?: string
}

const ImageResource = unstable_createResource((src: string) => (
    new Promise(resolve => {
        const img = new Image()
        img.onload = () => resolve(src)
        img.src = src
    })
))

const SuspendedImage: React.FC<Props> = ({ src, alt, ...rest }) => (
    //@ts-ignore
    <img src={ImageResource.read(src)} alt={alt} {...rest} />
)

export default SuspendedImage