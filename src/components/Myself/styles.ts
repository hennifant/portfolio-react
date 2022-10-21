import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  color: #ffff;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0, 0, 0, 0);
  .myself-text {
    & > p {
      font-size: 1.8rem;
    }
    h1 {
      font-size: 7rem;
    }
    h3 {
      color: var(--green);
      margin: 1rem 0;
    }

    p.small-resume {
      margin-bottom: 5rem;
    }
  }
  .button {
    margin-top: 5rem;
    padding: 1.8rem 6rem;
  }
  .myself-image {
    img {
      max-width: 500px;
    }
  }
  @media (max-width: 960px) {
    display: block;
    margin-top: 15%;
    .myself-text {
      h1 {
        font-size: 5rem;
      }
    }

    .myself-image {
      display: none;
    }
  }
`;
