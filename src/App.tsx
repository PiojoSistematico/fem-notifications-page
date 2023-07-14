import { useEffect, useState } from "react";
import Notification from "./components/Notification";

function App() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch("notifications.json")
      .then((res) => res.json())
      .then((data) => setNotifications(data));
  }, []);

  console.log(notifications);
  return (
    <main>
      <header>
        <h1>
          Notifications <span>3</span>
        </h1>
        <button>Mark all as read</button>
      </header>
      <ul>
        {notifications.map((elem, index) => (
          <li>
            <Notification key={index} notification={elem}></Notification>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
