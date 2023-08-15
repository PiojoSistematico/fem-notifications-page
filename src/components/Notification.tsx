import NotificationComment from "./NotificationComment";
import NotificationFollower from "./NotificationFollower";
import NotificationGroupStatus from "./NotificationGroupStatus";
import NotificationPrivateMessage from "./NotificationPrivateMessage";
import NotificationReaction from "./NotificationReaction";

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

type ComponentProps = {
  [key: string]: React.ComponentType<NotificationProps>;
};

const Notification: React.FunctionComponent<NotificationProps> = ({
  notification,
}) => {
  const componentMap: ComponentProps = {
    reaction: NotificationReaction,
    follower: NotificationFollower,
    groupStatus: NotificationGroupStatus,
    privateMessage: NotificationPrivateMessage,
    comment: NotificationComment,
  };

  const ComponentToRender = componentMap[notification.type];

  return <ComponentToRender notification={notification} />;
};

export default Notification;
