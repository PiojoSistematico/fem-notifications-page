import redDot from "../../public/circle-solid.svg";

type NotificationProps = {
  notification: {
    type: string;
    action: string;
    avatar: string;
    date: string;
    location: string;
    read: string;
    user: string;
  };
};

const NotificationGroupStatus: React.FunctionComponent<NotificationProps> = ({
  notification,
}) => {
  return (
    <article className={notification.read == "true" ? "read" : "unread"}>
      <div className="img-container">
        <img src={notification.avatar} alt="" className="avatar" />
      </div>
      <div className="reaction">
        <p>
          <a href="" className="username">
            {notification.user}
          </a>{" "}
          {notification.action}{" "}
          <a href="" className="location-status-group">
            {notification.location}
          </a>{" "}
          <img
            src={redDot}
            alt=""
            className={notification.read == "true" ? "no-show" : "show red-dot"}
          />
        </p>
        <p className="date">{notification.date}</p>
      </div>
    </article>
  );
};

export default NotificationGroupStatus;
