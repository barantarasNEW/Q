import Cards from "./components/Cards";
import styles from "./styles/styles.module.css";

const App = () => {
  return (
    <main className={styles.main}>
      <Cards />
    </main>
  );
};

export default App;

// useEffect(() => {
//   const socket = io("ws://62.113.96.69/api/websocket/v1");

//   socket.on("message", (data) => {
//     console.log("Отримано повідомлення:", JSON.parse(data));
//   });

//   socket.on("connect", () => {
//     console.log("Підключено до сервера Socket.IO");
//   });

//   socket.on("disconnect", () => {
//     console.log("Відключено від сервера Socket.IO");
//   });

//   return () => {
//     socket.disconnect();
//   };
// }, []);
