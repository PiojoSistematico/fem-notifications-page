import { useEffect, useState } from "react";
import Notification from "./components/Notification";

type NotificationProp = {
  type: string;
  user: string;
  avatar: string;
  read: string;
  action: string;
  location: string;
  date: string;
};

function App() {
  const [notifications, setNotifications] = useState<NotificationProp[]>([]);

  useEffect(() => {
    fetch("notifications.json")
      .then((res) => res.json())
      .then((data) => setNotifications(data));
  }, []);

  function handleClick(): void {
    setNotifications(notifications.map((elem) => ({ ...elem, read: "true" })));
  }

  const count: number = notifications.filter(
    (notification) => notification.read === "false"
  ).length;

  return (
    <div className="wrapper">
      <header>
        <h1>
          Notifications <span className="unread-notifications">{count}</span>
        </h1>
        <button onClick={handleClick}>Mark all as read</button>
      </header>
      <main>
        <ul>
          {notifications.map((elem, index) => (
            <li key={index}>
              <Notification notification={elem}></Notification>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
