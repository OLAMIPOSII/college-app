import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="testimonials">
      <img
        src={next_icon}
        alt="NEXT ICON"
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src={back_icon}
        alt="BACK ICON"
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="USER 1" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Edusity USA provided me with the perfect environment to grow
                both academically and personally. The professors are incredibly
                knowledgeable and genuinely care about their students' success.
                The resources available, from state-of-the-art facilities to
                personalized academic support, helped me excel in my studies.
                What truly set Edusity apart was the emphasis on real-world
                application of knowledge, preparing me not just for exams, but
                for a meaningful career.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="USER 2" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Edusity USA provided me with the perfect environment to grow
                both academically and personally. The professors are incredibly
                knowledgeable and genuinely care about their students' success.
                The resources available, from state-of-the-art facilities to
                personalized academic support, helped me excel in my studies.
                What truly set Edusity apart was the emphasis on real-world
                application of knowledge, preparing me not just for exams, but
                for a meaningful career.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="USER 3" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Edusity USA provided me with the perfect environment to grow
                both academically and personally. The professors are incredibly
                knowledgeable and genuinely care about their students' success.
                The resources available, from state-of-the-art facilities to
                personalized academic support, helped me excel in my studies.
                What truly set Edusity apart was the emphasis on real-world
                application of knowledge, preparing me not just for exams, but
                for a meaningful career.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="USER 4" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Edusity USA provided me with the perfect environment to grow
                both academically and personally. The professors are incredibly
                knowledgeable and genuinely care about their students' success.
                The resources available, from state-of-the-art facilities to
                personalized academic support, helped me excel in my studies.
                What truly set Edusity apart was the emphasis on real-world
                application of knowledge, preparing me not just for exams, but
                for a meaningful career.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
