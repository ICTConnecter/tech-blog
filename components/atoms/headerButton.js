/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { useState } from "react";
import { useSpring, animated } from "react-spring";

export default function HeaderButton(props) {
  // propsの取り出し
  const href = props.href;
  const name = props.name;

  // useStateの設定
  const [hovered, setHovered] = useState(false);

  // useSpringの設定
  const yellowBaseMoving = useSpring({
    width: hovered ? 120 : 10,
    config: { duration: 200 },
  });
  const textStyleMoving = useSpring({
    color: hovered ? 'black' : 'white',
    config: { duration: 200 },
  });

  // 要素の上にカーソルが移動してきた際に発生するイベント(onmouseover)
  const onMouseOver = () => {
    setHovered(true);
  };

  // 要素の上からカーソルが離れる際に発生するイベント(onmouseout)
  const onMouseOut = () => {
    setHovered(false);
  };

  return (
    <div css={blackBase} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <animated.div css={yellowBase} style={yellowBaseMoving}>
        <div css={textBase}>
          <animated.a href={href} css={textStyle} style={textStyleMoving}>
            <span>{name}</span>
          </animated.a>
        </div>
      </animated.div>
    </div>
  );
}

// style by Emotion
const blackBase = css({
  display: "flex",
  alignItems: "stretch",
  height: "50px",
  width: "120px",
  background: "#000",
});
const yellowBase = css({
  background: "#14ffec",
  margin: "5px",
});
const textBase = css({
  display: "flex",
  height: "100%",
  alignItems: "center",
  width: "120px",
});
const textStyle = css({
  width: "100%",
  textAlign: "center",
  textDecoration: "none",
  fontFamily: "fantasy",
  // color: "#fff",
  whiteSpace: "nowrap",
});
