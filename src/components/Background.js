import Particles from 'react-tsparticles'

const Background = () => {
  return (
    <Particles options={{
      "background": {
        "color": {
          "value": "#000000"
        },
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover"
      },
      "backgroundMode": {
        "enable": true
      },
      "fpsLimit": 30,
      "interactivity": {
        "events": {
          "onClick": {
            "mode": "push"
          },
          "onHover": {
            "mode": "bubble"
          }
        },
        "modes": {
          "bubble": {
            "distance": 400,
            "duration": 2,
            "opacity": 0.8,
            "color": {
              "value": "#ffab0d"
            },
            "size": 40
          },
          "grab": {
            "distance": 400
          }
        }
      },
      "particles": {
        "color": {
          "value": "#1b1e34"
        },
        "links": {
          "color": {
            "value": "#ffffff"
          },
          "distance": 200,
          "width": 2
        },
        "move": {
          "attract": {
            "rotate": {
              "x": 600,
              "y": 1200
            }
          },
          "enable": true,
          "outModes": {
            "bottom": "out",
            "left": "out",
            "right": "out",
            "top": "out"
          },
          "speed": 8
        },
        "number": {
          "density": {
            "enable": true
          },
          "value": 6
        },
        "opacity": {
          "random": {
            "enable": true,
            "minimumValue": 0.3
          },
          "value": 0.5,
          "animation": {
            "minimumValue": 0.1,
            "speed": 1
          }
        },
        "shape": {
          "options": {
            "polygon": {
              "nb_sides": 6
            },
            "star": {
              "nb_sides": 6
            },
            "image": {
              "src": "https://cdn.matteobruni.it/images/particles/github.svg",
              "width": 100,
              "height": 100
            },
            "images": {
              "src": "https://cdn.matteobruni.it/images/particles/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "type": "polygon"
        },
        "size": {
          "random": {
            "enable": true,
            "minimumValue": 100
          },
          "value": 160,
          "animation": {
            "minimumValue": 40
          }
        },
        "stroke": {
          "color": {
            "value": "#000",
            "animation": {
              "enable": false,
              "speed": 1,
              "sync": true
            }
          }
        }
      }
    }}/>
  );
}

export default Background;