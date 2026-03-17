"use client";

import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function ParticleNetwork() {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
const particlesInit = useCallback(async (engine: any) => {
  await loadFull(engine);
}, []);

  return (
    <Particles
      id="tsparticles"
      

      options={{
        fullScreen: {
          enable: true,
          zIndex: -1
        },

        particles: {
          number: {
            value: 70
          },

          color: {
            value: "#00ffff"
          },

          links: {
            enable: true,
            distance: 150,
            color: "#00ffff",
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

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            }
          },

          modes: {
            repulse: {
              distance: 120
            }
          }
        }
      }}
    />
  );
}