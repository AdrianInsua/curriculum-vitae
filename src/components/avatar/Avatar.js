import "./Avatar.scss";

function Avatar() {
  return (
    <div className="avatar__container animated zoomIn">
      <div className="avatar__wrapper">
        <img src={process.env.PUBLIC_URL + "/images/avatar.jpg"} alt="avatar" />
      </div>
      <div className="circle"></div>
    </div>
  );
}

export default Avatar;
