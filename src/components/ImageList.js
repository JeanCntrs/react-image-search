import React from 'react';
import Image from './Image';

const ImageList = ({ images }) => {
    return (
        <div className="col-12 p-5 row">
            {images.map(element => <Image key={element.id} element={element} />)}
        </div>
    );
}

export default ImageList;