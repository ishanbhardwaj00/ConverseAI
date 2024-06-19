import Main from "./containers/Main/Main";
import './App.css'
const App = () => {
  return (
    <>
      <Main />
    </>
  );
};

// export default App
// function App() {
//   const [inputText, setInputText] = useState("");
//   const [answer, setAnswer] = useState("");
//   function formatText(text: string) {
//     return prettier.format(text);
//   }
//   async function getRequest(e: any) {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://192.168.251.212:5555/v1/completions",
//         {
//           model: "/Hard_Disk-2/coe_codestral",
//           prompt: inputText,
//           max_tokens: 256,
//           temperature: 0,
//         }
//       );
//       setAnswer(response.data.choices[0].text);
//     } catch (error: any) {
//       setAnswer(error.toString());
//     }
//   }
//   return (
//     <>
//       <form
//         onSubmit={(e) => {
//           getRequest(e);
//         }}
//       >
//         <input
//           // type="textarea"
//           // style={{ height: 200, width: 500 }}
//           value={inputText}
//           onChange={(e) => {
//             setInputText(e.target.value);
//             console.log(e.target.value);
//           }}
//         />
//         <button>SUBMIT</button>
//       </form>
//       <div className="answer">
//         {answer.length > 0 ? (
//           <pre>
//             <code>{answer}</code>
//           </pre>
//         ) : (
//           "Type something"
//         )}
//       </div>
//     </>
//   );
// }

export default App;
