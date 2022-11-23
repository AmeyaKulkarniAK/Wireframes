import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AddTask from "../components/AddTask";
import PortalPopup from "../components/PortalPopup";
import styles from "./Component1.module.css";

const Component1 = () => {
  const navigate = useNavigate();
  const [isAddTaskOpen, setAddTaskOpen] = useState(false);

  const onGroupIcon2Click = useCallback(() => {
    navigate("/4");
  }, [navigate]);

  const onGroupIcon3Click = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  const openAddTask = useCallback(() => {
    setAddTaskOpen(true);
  }, []);

  const closeAddTask = useCallback(() => {
    setAddTaskOpen(false);
  }, []);

  return (
    <>
      <div className={styles.div}>
        <div className={styles.rectangleDiv} />
        <div className={styles.rectangleDiv1} />
        <div className={styles.div1}>6</div>
        <img className={styles.groupIcon} alt="" src="../group-34956.svg" />
        <img className={styles.groupIcon1} alt="" src="../group-349491.svg" />
        <div className={styles.rectangleDiv2} />
        <div className={styles.rectangleDiv3} />
        <img
          className={styles.groupIcon2}
          alt=""
          src="../group-34956.svg"
          onClick={onGroupIcon2Click}
        />
        <img
          className={styles.groupIcon3}
          alt=""
          src="../group-349491.svg"
          onClick={onGroupIcon3Click}
        />
        <div className={styles.searchDiv}>Search</div>
        <div className={styles.step3Div}>Step 3</div>
        <img className={styles.searchIcon} alt="" src="../search.svg" />
        <div className={styles.groupDiv} onClick={openAddTask}>
          <div className={styles.rectangleDiv4} />
          <div className={styles.addTaskDiv}>Add Task</div>
          <img
            className={styles.akarIconsplus}
            alt=""
            src="../akariconsplus.svg"
          />
        </div>
        <div className={styles.rectangleDiv5} />
        <div className={styles.rectangleDiv6} />
        <div className={styles.rectangleDiv7} />
        <div className={styles.div2}>4</div>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-18.svg" />
        <img
          className={styles.iconlyLightOutlineArrowL}
          alt=""
          src="../iconlylightoutlinearrowleft3.svg"
        />
        <div className={styles.rectangleDiv8} />
        <div className={styles.rectangleDiv9} />
        <img className={styles.groupIcon4} alt="" src="../group-261.svg" />
        <img className={styles.groupIcon5} alt="" src="../group-349331.svg" />
        <div className={styles.step1Div}>Step 1</div>
        <div className={styles.step2Div}>Step 2</div>
        <div className={styles.div3}>1</div>
        <div className={styles.div4}>5</div>
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-18.svg" />
        <img
          className={styles.iconlyLightOutlineArrowL1}
          alt=""
          src="../iconlylightoutlinearrowleft3.svg"
        />
        <img className={styles.groupIcon6} alt="" src="../group-349331.svg" />
        <div className={styles.rectangleDiv10} />
        <div className={styles.rectangleDiv11} />
        <div className={styles.rectangleDiv12} />
        <div className={styles.div5}>7</div>
        <div className={styles.div6}>8</div>
        <img className={styles.groupIcon7} alt="" src="../group-349491.svg" />
        <img className={styles.groupIcon8} alt="" src="../group-349491.svg" />
        <div className={styles.step4Div}>Step 4</div>
        <div className={styles.div7}>2</div>
        <div className={styles.groupDiv1}>
          <img className={styles.deleteIcon} alt="" src="../delete7.svg" />
          <div className={styles.deleteDiv}>Delete</div>
        </div>
        <div className={styles.groupDiv2}>
          <img className={styles.deleteIcon} alt="" src="../delete7.svg" />
          <div className={styles.deleteDiv}>Delete</div>
        </div>
        <div className={styles.groupDiv3}>
          <img className={styles.deleteIcon} alt="" src="../delete7.svg" />
          <div className={styles.deleteDiv}>Delete</div>
        </div>
        <div className={styles.groupDiv4}>
          <img className={styles.deleteIcon} alt="" src="../delete7.svg" />
          <div className={styles.deleteDiv}>Delete</div>
        </div>
        <div className={styles.groupDiv5}>
          <img className={styles.deleteIcon} alt="" src="../delete7.svg" />
          <div className={styles.deleteDiv}>Delete</div>
        </div>
        <div className={styles.groupDiv6}>
          <img className={styles.deleteIcon} alt="" src="../delete7.svg" />
          <div className={styles.deleteDiv}>Delete</div>
        </div>
        <div className={styles.groupDiv7}>
          <img className={styles.deleteIcon} alt="" src="../delete7.svg" />
          <div className={styles.deleteDiv}>Delete</div>
        </div>
      </div>
      {isAddTaskOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAddTask}
        >
          <AddTask onClose={closeAddTask} />
        </PortalPopup>
      )}
    </>
  );
};

export default Component1;
