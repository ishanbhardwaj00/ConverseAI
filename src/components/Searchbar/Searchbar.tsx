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
      appendMessage({ content: searchQuery, role: "user" });
      getAnswer();
    } else {
      console.log("Loading....... Cannot request");
    }
  }
  function appendMessage(message: MessageType) {
    console.log("appending message");
    const msgs = [...messages, message]; 
    // const msgs = messages;
    // msgs.push(message);
    setMessages(msgs);
  }

  async function getAnswer() {
    console.log("Getting  answer");
    setLoading(true);
    if (searchQuery.length) {
      try {
        console.log(JSON.stringify(messages));

        const response = await axios.post("http://localhost:3000/", {
          messages: messages,
          model: "/Hard_Disk-2/coe_codestral",
        });
        appendMessage({
          content: response.data.choices[0].message.content,
          role: "assistant",
        });
        console.log(response.data);
      } catch (error) {
        appendMessage({
          content: "",
          role: "assistant",
        });
      }
      setLoading(false);
      setSearchQuery("");
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
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              submitQuery();
              setSearchQuery("");
            }
          }}
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
          // onClick={submitQuery}
          onClick={() => {
            submitQuery();
            setSearchQuery("");
        }}
        />
      </div>
    </div>
  );
};

export default Searchbar;
