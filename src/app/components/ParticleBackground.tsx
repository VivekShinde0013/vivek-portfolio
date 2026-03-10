"use client";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function ParticleBackground() {

  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}

      options={{
        fullScreen: {
          enable: true,
          zIndex: -1
        },

        particles: {
          number: {
            value: 80
          },

          color: {
            value: "#ffffff"
          },

          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4
          },

          move: {
            enable: true,
            speed: 2
          },

          size: {
            value: 2
          },

          opacity: {
            value: 0.5
          }
        },

        background: {
          color: "#000000"
        }
      }}
    />
  );
}