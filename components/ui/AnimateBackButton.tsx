"use client"
import styled from "styled-components"

interface AnimatedBackButtonProps {
  onClick: () => void
}

const AnimatedBackButton = ({ onClick }: AnimatedBackButtonProps) => {
  return (
    <StyledWrapper>
      <button className="button" onClick={onClick}>
        <span className="actual-text">&nbsp;Go Back&nbsp;</span>
        <span aria-hidden="true" className="hover-text">
          &nbsp;Go Back&nbsp;
        </span>
      </button>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  /* === removing default button style ===*/
  .button {
    margin: 0;
    height: auto;
    background: transparent;
    padding: 0;
    border: none;
    cursor: pointer;
    outline: none;
    position: relative;
  }

  /* button styling */
  .button {
    --border-right: 6px;
    --text-stroke-color: rgba(255,255,255,0.6);
    --animation-color: #37FF8B;
    --fs-size: 1.5em;
    letter-spacing: 2px;
    text-decoration: none;
    font-size: var(--fs-size);
    font-family: "Arial", sans-serif;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px var(--text-stroke-color);
    transition: all 0.3s ease;
    display: inline-block;
    position: relative;
  }

  /* actual text (always visible with stroke) */
  .actual-text {
    position: relative;
    z-index: 1;
  }

  /* this is the text that slides in on hover */
  .hover-text {
    position: absolute;
    top: 0;
    left: 0;
    color: var(--animation-color);
    width: 0;
    overflow: hidden;
    border-right: var(--border-right) solid var(--animation-color);
    transition: width 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    -webkit-text-stroke: 1px var(--animation-color);
    white-space: nowrap;
    z-index: 2;
  }

  /* hover effect */
  .button:hover .hover-text {
    width: 100%;
    filter: drop-shadow(0 0 23px var(--animation-color));
  }

  /* focus state for accessibility */
  .button:focus {
    outline: 2px solid var(--animation-color);
    outline-offset: 4px;
  }

  /* responsive adjustments */
  @media (max-width: 768px) {
    .button {
      --fs-size: 1.2em;
      letter-spacing: 1px;
    }
  }

  @media (max-width: 480px) {
    .button {
      --fs-size: 1em;
    }
  }
`

export default AnimatedBackButton
