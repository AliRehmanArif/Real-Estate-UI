import { useState } from "react";
import "./chat.scss";

function Chat() {
  const [chat, setChat] = useState(true);

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing...</p>
        </div>
      </div>

      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg"
                alt=""
              />
              John Doe
            </div>
            <span className="close" onClick={()=>setChat(null)}>x</span>
          </div>
          <div className="center">
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit...</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
