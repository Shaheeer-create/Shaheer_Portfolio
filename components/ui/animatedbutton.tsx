"use client"

import type React from "react"
import styled from "styled-components"
import { useState, useEffect } from "react"

interface AnimatedButtonProps {
  type?: "button" | "submit" | "reset"
  disabled?: boolean
  isSubmitting?: boolean
  isSubmitted?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  type = "button",
  disabled = false,
  isSubmitting = false,
  isSubmitted = false,
  onClick,
}) => {
  const [hasBeenClicked, setHasBeenClicked] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !isSubmitting) {
      setHasBeenClicked(true)
      if (onClick) {
        onClick(e)
      }
    }
  }

  // Reset the clicked state when form is reset or submitted
  useEffect(() => {
    if (isSubmitted || (!isSubmitting && !disabled)) {
      const timer = setTimeout(() => setHasBeenClicked(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [isSubmitted, isSubmitting, disabled])

  return (
    <StyledWrapper>
      <button
        className={`button ${hasBeenClicked ? "clicked" : ""} ${isSubmitting ? "submitting" : ""}`}
        type={type}
        disabled={disabled || isSubmitting}
        onClick={handleClick}
      >
        <div className="outline" />
        <div className="state state--default">
          <div className="icon">
            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g style={{ filter: "url(#shadow)" }}>
                <path
                  d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z"
                  fill="currentColor"
                />
                <path
                  d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <filter id="shadow">
                  <feDropShadow dx={0} dy={1} stdDeviation="0.6" floodOpacity="0.5" />
                </filter>
              </defs>
            </svg>
          </div>
          <p>
            {isSubmitting ? (
              <>
                <span style={{ "--i": 0 } as React.CSSProperties}>S</span>
                <span style={{ "--i": 1 } as React.CSSProperties}>e</span>
                <span style={{ "--i": 2 } as React.CSSProperties}>n</span>
                <span style={{ "--i": 3 } as React.CSSProperties}>d</span>
                <span style={{ "--i": 4 } as React.CSSProperties}>i</span>
                <span style={{ "--i": 5 } as React.CSSProperties}>n</span>
                <span style={{ "--i": 6 } as React.CSSProperties}>g</span>
                <span style={{ "--i": 7 } as React.CSSProperties}>.</span>
                <span style={{ "--i": 8 } as React.CSSProperties}>.</span>
                <span style={{ "--i": 9 } as React.CSSProperties}>.</span>
              </>
            ) : (
              <>
                <span style={{ "--i": 0 } as React.CSSProperties}>S</span>
                <span style={{ "--i": 1 } as React.CSSProperties}>e</span>
                <span style={{ "--i": 2 } as React.CSSProperties}>n</span>
                <span style={{ "--i": 3 } as React.CSSProperties}>d</span>
                <span style={{ "--i": 4 } as React.CSSProperties}> </span>
                <span style={{ "--i": 5 } as React.CSSProperties}>M</span>
                <span style={{ "--i": 6 } as React.CSSProperties}>e</span>
                <span style={{ "--i": 7 } as React.CSSProperties}>s</span>
                <span style={{ "--i": 8 } as React.CSSProperties}>s</span>
                <span style={{ "--i": 9 } as React.CSSProperties}>a</span>
                <span style={{ "--i": 10 } as React.CSSProperties}>g</span>
                <span style={{ "--i": 11 } as React.CSSProperties}>e</span>
              </>
            )}
          </p>
        </div>
        <div className="state state--sent">
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              strokeWidth="0.5px"
              stroke="black"
            >
              <g style={{ filter: "url(#shadow)" }}>
                <path
                  fill="currentColor"
                  d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                />
                <path
                  fill="currentColor"
                  d="M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z"
                />
              </g>
            </svg>
          </div>
          <p>
            <span style={{ "--i": 5 } as React.CSSProperties}>S</span>
            <span style={{ "--i": 6 } as React.CSSProperties}>e</span>
            <span style={{ "--i": 7 } as React.CSSProperties}>n</span>
            <span style={{ "--i": 8 } as React.CSSProperties}>t</span>
          </p>
        </div>
      </button>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .button {
    --primary: #10b981;
    --neutral-1: #1e293b;
    --neutral-2: #334155;
    --radius: 14px;
    cursor: pointer;
    border-radius: var(--radius);
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
    border: none;
    box-shadow: 0 0.5px 0.5px 1px rgba(16, 185, 129, 0.2),
      0 10px 20px rgba(0, 0, 0, 0.3), 0 4px 5px 0px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 0.3s ease;
    min-width: 200px;
    padding: 20px;
    height: 68px;
    font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
    font-style: normal;
    font-size: 18px;
    font-weight: 600;
    color: #10b981;
    width: 100%;
  }

  .button:hover {
    transform: scale(1.02);
    box-shadow: 0 0 1px 2px rgba(16, 185, 129, 0.3),
      0 15px 30px rgba(0, 0, 0, 0.4), 0 10px 3px -3px rgba(0, 0, 0, 0.1);
  }

  .button:active {
    transform: scale(1);
    box-shadow: 0 0 1px 2px rgba(16, 185, 129, 0.3),
      0 10px 3px -3px rgba(0, 0, 0, 0.2);
  }

  .button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }

  .button:after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: var(--radius);
    border: 2.5px solid transparent;
    background: linear-gradient(var(--neutral-1), var(--neutral-2)) padding-box,
      linear-gradient(to bottom, rgba(16, 185, 129, 0.2), rgba(16, 185, 129, 0.4))
        border-box;
    z-index: 0;
    transition: all 0.4s ease;
  }

  .button:hover::after {
    transform: scale(1.05, 1.1);
    box-shadow: inset 0 -1px 3px 0 rgba(16, 185, 129, 0.3);
  }

  .button::before {
    content: "";
    inset: 7px 6px 6px 6px;
    position: absolute;
    background: linear-gradient(to top, var(--neutral-1), var(--neutral-2));
    border-radius: 30px;
    filter: blur(0.5px);
    z-index: 2;
  }

  .state p {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .state .icon {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    transform: scale(1.25);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .state .icon svg {
    overflow: visible;
  }

  /* Outline */
  .outline {
    position: absolute;
    border-radius: inherit;
    overflow: hidden;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.4s ease;
    inset: -2px -3.5px;
  }

  .outline::before {
    content: "";
    position: absolute;
    inset: -100%;
    background: conic-gradient(
      from 180deg,
      transparent 60%,
      #10b981 80%,
      transparent 100%
    );
    animation: spin 2s linear infinite;
    animation-play-state: paused;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .button:hover .outline {
    opacity: 1;
  }

  .button:hover .outline::before {
    animation-play-state: running;
  }

  /* Letters */
  .state p span {
    display: block;
    opacity: 0;
    animation: slideDown 0.8s ease forwards calc(var(--i) * 0.03s);
  }

  .button:hover p span {
    opacity: 1;
    animation: wave 0.5s ease forwards calc(var(--i) * 0.02s);
  }

  .button:focus p span {
    opacity: 1;
    animation: disapear 0.6s ease forwards calc(var(--i) * 0.03s);
  }

  @keyframes wave {
    30% {
      opacity: 1;
      transform: translateY(4px) translateX(0) rotate(0);
    }
    50% {
      opacity: 1;
      transform: translateY(-3px) translateX(0) rotate(0);
      color: var(--primary);
    }
    100% {
      opacity: 1;
      transform: translateY(0) translateX(0) rotate(0);
    }
  }

  @keyframes slideDown {
    0% {
      opacity: 0;
      transform: translateY(-20px) translateX(5px) rotate(-90deg);
      color: var(--primary);
      filter: blur(5px);
    }
    30% {
      opacity: 1;
      transform: translateY(4px) translateX(0) rotate(0);
      filter: blur(0);
    }
    50% {
      opacity: 1;
      transform: translateY(-3px) translateX(0) rotate(0);
    }
    100% {
      opacity: 1;
      transform: translateY(0) translateX(0) rotate(0);
    }
  }

  @keyframes disapear {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translateX(5px) translateY(20px);
      color: var(--primary);
      filter: blur(5px);
    }
  }

  /* Plane */
  .state--default .icon svg {
    animation: land 0.6s ease forwards;
  }

  .button:hover .state--default .icon {
    transform: rotate(45deg) scale(1.25);
  }

  .button:focus .state--default .icon {
    transform: rotate(0) scale(1.25);
  }

  @keyframes takeOff {
    0% {
      opacity: 1;
    }
    60% {
      opacity: 1;
      transform: translateX(70px) rotate(45deg) scale(2);
    }
    100% {
      opacity: 0;
      transform: translateX(160px) rotate(45deg) scale(0);
    }
  }

  @keyframes land {
    0% {
      transform: translateX(-60px) translateY(30px) rotate(-50deg) scale(2);
      opacity: 0;
      filter: blur(3px);
    }
    100% {
      transform: translateX(0) translateY(0) rotate(0);
      opacity: 1;
      filter: blur(0);
    }
  }

  /* Contrail */
  .state--default .icon:before {
    content: "";
    position: absolute;
    top: 50%;
    height: 2px;
    width: 0;
    left: -5px;
    background: linear-gradient(to right, transparent, rgba(16, 185, 129, 0.5));
  }

  .button:focus .state--default .icon:before {
    animation: contrail 0.8s linear forwards;
  }

  @keyframes contrail {
    0% {
      width: 0;
      opacity: 1;
    }
    8% {
      width: 15px;
    }
    60% {
      opacity: 0.7;
      width: 80px;
    }
    100% {
      opacity: 0;
      width: 160px;
    }
  }

  /* States */
  .state {
    padding-left: 29px;
    z-index: 2;
    display: flex;
    position: relative;
  }

  .state--default span:nth-child(4) {
    margin-right: 5px;
  }

  .state--sent {
    display: none;
  }

  .button:focus .state--default {
    position: absolute;
  }

  .button:focus .state--sent {
    display: flex;
  }

  .button:focus .state--sent span {
    opacity: 0;
    animation: slideDown 0.8s ease forwards calc(var(--i) * 0.2s);
  }

  .button:focus .state--sent .icon svg {
    opacity: 0;
    animation: appear 1.2s ease forwards 0.8s;
  }

  @keyframes appear {
    0% {
      opacity: 0;
      transform: scale(4) rotate(-40deg);
      color: var(--primary);
      filter: blur(4px);
    }
    30% {
      opacity: 1;
      transform: scale(0.6);
      filter: blur(1px);
    }
    50% {
      opacity: 1;
      transform: scale(1.2);
      filter: blur(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  .button.clicked:focus .state--default {
    position: absolute;
  }

  .button.clicked:focus .state--sent {
    display: flex;
  }

  .button.clicked:focus .state--sent span {
    opacity: 0;
    animation: slideDown 0.8s ease forwards calc(var(--i) * 0.2s);
  }

  .button.clicked:focus .state--sent .icon svg {
    opacity: 0;
    animation: appear 1.2s ease forwards 0.8s;
  }

  .button.submitting .state--default .icon {
    animation: pulse 1s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1.25);
      opacity: 1;
    }
    50% {
      transform: scale(1.4);
      opacity: 0.7;
    }
  }
`

export default AnimatedButton
