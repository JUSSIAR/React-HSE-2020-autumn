import React from "react";
import { connect } from "react-redux";

import "./PostPreview.css";

const mapStateToProps = (state) => ({
  title: state.post.title,
  image: state.post.image,
  body: state.post.body,
  theme: state.theme.theme,
});

const PostPreviewComponent = ({ theme, title, image, body }) => {
  const containerClassName = `post-preview ${theme}`;

  return (
    <>
      <h1>Post preview</h1>
      <div className={containerClassName}>
        {title && <h1>{title}</h1>}
        {image && <img className="img" src={image} alt="post pic" />}
        {body && <div className="body">{body}</div>}
      </div>
    </>
  );
};

export const PostPreview = connect(mapStateToProps)(PostPreviewComponent);
