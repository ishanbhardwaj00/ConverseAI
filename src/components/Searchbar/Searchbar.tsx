import { useState } from "react";
import "./Searchbar.css";
import { IoFlaskOutline } from "react-icons/io5";
import { v1 } from "uuid";
import { MessageType } from "../../types/MessageType";
import axios from "axios";

const Searchbar = ({
  messages,
  setMessages,
  loading,
  setLoading,
}: {
  messages: MessageType[];
  setMessages: React.Dispatch<React.SetStateAction<MessageType[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [searchBarSelected, setSearchBarSelected] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  function submitQuery() {
    if (!loading && searchQuery.length) {
      appendMessage({ text: searchQuery, type: "text", id: v1() });
      setSearchQuery("");
      getAnswer(searchQuery);
    } else {
      console.log("Loading....... Cannot request");
    }
  }
  function appendMessage(message: MessageType) {
    console.log("appending message");
    const msgs = messages;
    msgs.push(message);
    setMessages(msgs);
  }

  async function getAnswer(question: string) {
    console.log("Getting  answer");
    setLoading(true);
    const prompt = question.trim();
    if (prompt) {
      try {
        const response = await axios.post(
          "http://192.168.251.212:5555/v1/completions",
          {
            model: "/Hard_Disk-2/coe_codestral",
            prompt: prompt,
            max_tokens: 2048,
            temperature: 0.2,
          }
        );
        appendMessage({
          text: response.data.choices[0].text,
          type: "text",
          id: v1(),
        });
        console.log(response.data);
      } catch (error) {
        appendMessage({ text: "Error", type: "error", id: v1() });
      }
      setLoading(false);
    }
  }
  return (
    <div
      className={`searchbar ${searchBarSelected ? "selected" : "not-selected"}`}
    >
      <div className="search-container">
        <input
          onFocus={() => {
            setSearchBarSelected(true);
          }}
          onBlur={() => {
            setSearchBarSelected(false);
          }}
          // onKeyDown={(e) => {
          //   if (e.key === "ENTER")React.Dispatch<React.SetStateAction<string>>(true);
          // }}
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          type="text"
          placeholder="Ask us something"
        />
        <IoFlaskOutline
          className="search-icon"
          size={28}
          onClick={submitQuery}
        />
      </div>
    </div>
  );
};

export default Searchbar;
