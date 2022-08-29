import React from "react";
import ReactDOM from "react-dom";
import Peep from "react-peeps";

export default function Test() {
  const styles = {
    peepStyle: {
      width: 300,
      height: 300,
      justifyContent: "center",
      alignSelf: "center",
    },
    circleStyle: {
      backgroundColor: "#F3D34A",
      width: 270,
      height: 270,
      alignSelf: "center",
      borderRadius: 135,
      overflow: "hidden",
      borderWidth: 3,
      borderColor: "black",
      borderStyle: "solid",
    },
    showcaseWrapper: {
      display: "flex",
      justifyContent: "center",
      height: "-webkit-fill-available",
    },
  };
  return (
    <div style={styles.showcaseWrapper}>
      <Peep
        style={styles.peepStyle}
        accessory="GlassRoundThick"
        body="Shirt"
        face="Cute"
        hair="ShortVolumed"
        facialHair="Dali"
        strokeColor="#e6e6e6"
        backgroundColor="red"
      />

      <Peep
        style={styles.peepStyle}
        circleStyle={styles.circleStyle}
        accessory="GlassRoundThick"
        body="Shirt"
        face="Cute"
        hair="ShortVolumed"
        facialHair="Dali"
        strokeColor="#e6e6e6"
        viewBox={{ x: "0", y: "0", width: "1050", height: "1200" }}
      />

      <Peep
        style={{ ...styles.peepStyle, transform: "scale(-1, 1)" }}
        accessory="GlassRoundThick"
        body="Shirt"
        face="Cute"
        hair="ShortVolumed"
        facialHair="Dali"
        strokeColor={{
          degree: 300,
          firstColor: "#2E8A57",
          secondColor: "#81087F",
        }}
      />
    </div>
  );
}
