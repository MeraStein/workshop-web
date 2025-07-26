import { useState } from "react";
import { Paragraph } from "../../global";
import styles from "./SingleParagraph.module.css";

interface SingleParagraphProps {
  paragraph: Paragraph;
}

export default function SingleParagraph({ paragraph }: SingleParagraphProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOnClick = () => setIsOpen((prev) => !prev);

  return (
    <div className={styles.singleParagraph}>
      <div className={styles.singleParagraphHeader} onClick={handleOnClick}>
        <span>{!isOpen ? "➕" : "➖"}</span>
        <h2 className="h2">{paragraph.title}</h2>
      </div>

      {isOpen && (
        <div className={styles.singleParagraphContent}>
          <pre
            style={{
              whiteSpace: "pre-wrap",
              fontFamily: "inherit",
              fontSize: "1rem",
              margin: 0,
            }}
          >
            {paragraph.content}
          </pre>
        </div>
      )}
    </div>
  );
}
