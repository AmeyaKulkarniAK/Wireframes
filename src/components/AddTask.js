import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddTask.module.css";

const AddTask = ({ onClose }) => {
  const navigate = useNavigate();

  const onGroupContainer2Click = useCallback(() => {
    navigate("/5");
  }, [navigate]);

  return (
    <div className={styles.addTaskDiv}>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv} />
        <img className={styles.groupIcon} alt="" src="../group-26364.svg" />
        <div className={styles.addTaskDiv1}>Add Task</div>
        <div className={styles.groupDiv1}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.addTitleDiv}>Add Title</div>
        </div>
        <div className={styles.groupDiv2} onClick={onGroupContainer2Click}>
          <div className={styles.groupDiv3}>
            <div className={styles.rectangleDiv2} />
            <div className={styles.addTaskDiv2}>Add Task</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
