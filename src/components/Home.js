import  header  from "../images/logos/heading.svg";
import Particles from "react-particles-js";
const Home = () => {
    return (
      <div className="min-h-screen bg-gray-800 bg-cover relative flex flex-col justify-center align-items-center"
      style={{
        backgroundImage : `url('/images/bg.png')`
      }}
      >
        <div className="h-full">
          <Particles
            height="100%"
            id="tsparticles"
            params={{
              autoPlay: true,
              background: {
                color: {
                  enable: false,
                  value: false,
                },
                image: "",
                position: "",
                repeat: "",
                size: "",
                opacity: 0,
              },
              backgroundMask: {
                composite: "destination-out",
                cover: {
                  color: {
                    value: "#fff",
                  },
                  opacity: 0,
                },
                enable: false,
              },
              backgroundMode: {
                enable: false,
                zIndex: -1,
              },
              detectRetina: true,
              fpsLimit: 60,
              motion: {
                disable: false,
                reduce: {
                  factor: 4,
                  value: false,
                },
              },
              particles: {
                bounce: {
                  horizontal: {
                    random: {
                      enable: false,
                      minimumValue: 0.1,
                    },
                    value: 1,
                  },
                  vertical: {
                    random: {
                      enable: false,
                      minimumValue: 0.1,
                    },
                    value: 1,
                  },
                },
                collisions: {
                  bounce: {
                    horizontal: {
                      random: {
                        enable: false,
                        minimumValue: 0.1,
                      },
                      value: 1,
                    },
                    vertical: {
                      random: {
                        enable: false,
                        minimumValue: 0.1,
                      },
                      value: 1,
                    },
                  },
                  enable: false,
                  mode: "bounce",
                },
                color: {
                  value: "#fff",
                  animation: {
                    enable: true,
                    speed: 1,
                    sync: true,
                  },
                },
                life: {
                  count: 0,
                  delay: {
                    random: {
                      enable: false,
                      minimumValue: 0,
                    },
                    value: 0,
                    sync: false,
                  },
                  duration: {
                    random: {
                      enable: false,
                      minimumValue: 0.0001,
                    },
                    value: 0,
                    sync: false,
                  },
                },
                links: {
                  blink: false,
                  color: {
                    value: "#fff",
                  },
                  consent: false,
                  distance: 100,
                  enable: true,
                  frequency: 1,
                  opacity: 1,
                  shadow: {
                    blur: 5,
                    color: {
                      value: "#00ff00",
                    },
                    enable: false,
                  },
                  triangles: {
                    enable: false,
                    frequency: 1,
                  },
                  width: 1,
                  warp: false,
                },
                move: {
                  angle: {
                    offset: 45,
                    value: 90,
                  },
                  attract: {
                    enable: false,
                    rotate: {
                      x: 3000,
                      y: 3000,
                    },
                  },
                  direction: "none",
                  distance: 0,
                  enable: true,
                  gravity: {
                    acceleration: 9.81,
                    enable: false,
                    maxSpeed: 50,
                  },
                  noise: {
                    delay: {
                      random: {
                        enable: false,
                        minimumValue: 0,
                      },
                      value: 0,
                    },
                    enable: false,
                  },
                  outModes: {
                    default: "out",
                  },
                  random: false,
                  size: false,
                  speed: 2,
                  straight: false,
                  trail: {
                    enable: false,
                    length: 10,
                    fillColor: {
                      value: "#000000",
                    },
                  },
                  vibrate: false,
                  warp: false,
                },
                number: {
                  limit: 0,
                  value: 50,
                },
                opacity: {
                  random: {
                    enable: false,
                    minimumValue: 0.1,
                  },
                  value: 1,
                  animation: {
                    enable: false,
                    minimumValue: 0,
                    speed: 2,
                    sync: false,
                  },
                },
                reduceDuplicates: false,
                shape: {
                  options: {},
                  type: "circle",
                },
                size: {
                  random: {
                    enable: false,
                    minimumValue: 1,
                  },
                  value: 3,
                  animation: {
                    destroy: "none",
                    enable: true,
                    minimumValue: 0,
                    speed: 5,
                    startValue: "max",
                    sync: false,
                  },
                },
              },
              pauseOnBlur: true,
              pauseOnOutsideViewport: true,
            }}
          />
        </div>
        <div className="absolute object-center md:pl-10 mx-auto z-5">
          <img src={header} className="px-5" alt="header" />
        </div>
      </div>
    );
}
 
export default Home;