import React from "react";
import Particles from "react-particles-js";

// window.addEventListener("load", event => {});
let numParticles = 150;

if (process.env.NODE_ENV !== "development" && typeof window !== `undefined`) {
  const { innerWidth: width, innerHeight: height } = window;
  const divisor = 10000;

  numParticles = (width * height) / divisor;
}

const particleParams = {
  particles: {
    number: {
      value: numParticles
    },
    color: {
      value: "#fff"
    },
    // shape: {
    //   type: "circle",
    //   stroke: {
    //     width: 1,
    //     color: "#fff"
    //   }
    // },
    size: {
      value: 3,
      random: true
    },
    opacity: {
      value: 0.9,
      random: true
    },
    line_linked: {
      enable_auto: true,
      // distance: 100,
      color: "#fff",
      opacity: 0.5,
      width: 1.5
    },
    move: {
      enable: true,
      speed: 1.2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      }
    },
    modes: {
      grab: {
        line_linked: {
          opacity: 0.7
        }
        // distance: 1000
      }
    },
    detect_on: "window"
  }
};

const ParticlesContainer = () => (
  <div
    style={{
      position: "absolute",
      backgroundColor: "#fb1",
      // backgroundImage:
      //   "linear-gradient(to left bottom, #ffba11, #ffba11, #ffbb11, #ffbb11, #ffbb11)",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -1
    }}
  >
    <Particles style={{ position: "absolute" }} params={particleParams} />
  </div>
);

export default ParticlesContainer;
