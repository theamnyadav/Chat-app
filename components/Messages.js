import React, { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";
const MINS_DURATION = 1500;

function Messages() {
  const { user } = useMoralis();
  const endofMessageRef = useRef(null);
  const { data, loading, error } = useMoralisQuery('Messages', (query) =>
    query
      .ascending("createdAt")
      .greaterThan(
        "createdAt",
        new Date(Date.now() - 1000 * 60 * MINS_DURATION),
        [],
        {
          live: true,
        }
      )
  );
  console.log(data);
  return (
    <div className="pb-56">
      <div className="my-5">
        <ByMoralis
          variant="dark"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
      </div>

      <div className="space-y-">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>

      <div className="flex justify-center">
        <SendMessage endofMessageRef={endofMessageRef} />
      </div>

      <div ref={endofMessageRef} className="text-center text-gray-400 mt-5">
        <h1>You're up to date {user.getUsername()}</h1>
      </div>
    </div>
  );
}

export default Messages;
