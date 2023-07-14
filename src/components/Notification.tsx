type NotificationProps = {
  notification: {
    action: string;
    avatar: string;
    date: string;
    location: string;
    read: string;
    user: string;
  };
};

const Notification: React.FunctionComponent<NotificationProps> = ({
  notification,
}) => {
  return (
    <section className={notification.read == "true" ? "read" : "unread"}>
      <div>
        <img src={notification.avatar} alt="" />
      </div>
      <div>
        <p>
          <span>{notification.user}</span> {notification.action}{" "}
          {notification.location}{" "}
          {notification.read == "true" ? null : (
            <img src="circle-solid.svg" className="red-dot"></img>
          )}
        </p>
        <span>{notification.date}</span>
      </div>
    </section>
  );
};

export default Notification;
