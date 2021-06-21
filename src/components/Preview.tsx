import { useRef } from "react";

interface PreviewProps {
    code: string,
    err: string
}

const Preview: React.FC<PreviewProps> = ({ code, err }) => {
    const iframe = useRef<any>();

    return (<div>

    </div>);
}


export default Preview;