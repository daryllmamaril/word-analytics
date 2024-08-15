import { useState } from "react";
import Warning from "./Warning";

export default function Textarea( { text, setText }) {
  const [warningText, setWarningText] = useState("");
  
  const handleChange = (e) => {
    let newText = e.target.value;

    if (newText.includes("<script>")) {
      setWarningText("Script tag is not allowed");
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setWarningText("@ symbol is not allowed");
      newText = newText.replace("@", "");
    } else {
      setWarningText("");
    }
    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter text here..."
        spellCheck="false"
      />
      {setText && <Warning warningText={warningText} />}
    </div>
  );
}
