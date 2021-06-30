import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from "react-loader-spinner";

const LoaderComponent = ({loaderSettings}) => {
    return (
        <Loader
            type={loaderSettings.type}
            color={loaderSettings.color}
            height={ loaderSettings.height }
            width={ loaderSettings.width }
            timeout={ loaderSettings.timeout }
        />
    );
};

export default LoaderComponent;