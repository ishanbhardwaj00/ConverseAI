import { useState } from "react";
import "./Searchbar.css";
import { IoFlaskOutline } from "react-icons/io5";
import { BiSend } from "react-icons/bi";
import { v1 } from "uuid";
import axios from "axios";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import Spinner from "../Spinner";

const openai = new OpenAI({
  baseURL: "http://192.168.251.212:5555/v1",
  apiKey: "EMPTY",
  dangerouslyAllowBrowser: true,
});

const Searchbar = ({
  messages,
  setMessages,
  loading,
  setLoading,
}: {
  messages: ChatCompletionMessageParam[];
  setMessages: React.Dispatch<
    React.SetStateAction<ChatCompletionMessageParam[]>
  >;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [searchBarSelected, setSearchBarSelected] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  function submitQuery() {
    if (!loading && searchQuery.length) {
      appendMessage({ content: searchQuery, role: "user" });
      getAnswer();
    } else if (searchQuery.length === 0) {
      console.log("empty search bar");
    } else {
      console.log("Loading....... Cannot request");
    }
  }
  function appendMessage(message: ChatCompletionMessageParam) {
    console.log("appending message");
    const msgs = messages;
    msgs.push(message);
    setMessages(msgs);
  }

  async function getAnswer() {
    console.log("Getting  answer");
    setLoading(true);
    if (searchQuery.length) {
      try {
        console.log(JSON.stringify(messages));
        const completion = await openai.chat.completions.create({
          messages: messages,
          model: "/Hard_Disk-2/coe_codestral",
        });

        appendMessage({
          content: completion.choices[0].message.content,
          role: "assistant",
        });

        console.log(completion.choices);
      } catch (error) {
        console.log(error);

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
        {loading ? (
          <Spinner />
        ) : (
          <BiSend className="search-icon" size={28} onClick={submitQuery} />
        )}
      </div>
    </div>
  );
};

export default Searchbar;
