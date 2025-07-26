import { PARAGRAPHS } from "../../global";
import SingleParagraph from "../singleParagraph/SingleParagraph";
import styles from "./Paragraphs.module.css";

export default function Paragraphs() {
  return (
    <div className={styles.paragraphsContainer}>
      {PARAGRAPHS.map((par, idx) => (
        <SingleParagraph key={idx} paragraph={par} />
      ))}
    </div>
  );
}
