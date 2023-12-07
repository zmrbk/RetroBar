import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";

export function PhotoUpload() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 3;

  const onChange = (imageList: ImageListType) => {
    // console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  return (
    <div className="photoUpload">
      <ImageUploading multiple value={images} onChange={onChange} maxNumber={maxNumber}>
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}>
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.dataURL} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
