import React, { useState } from 'react';
import styled from 'styled-components';

import PuttForm from './PuttForm';

const Styled = {
  Container: styled.div`
    display: flex;

    align-items: center;
    flex-direction: column;
    justify-content: center;

    margin-bottom: 50px;
  `,
  SubmissionHeader: styled.div``,
  ResultsContainer: styled.div``,
  ResultsItem: styled.div``,
  Button: styled.button`
    border: 0.16em solid rgba(255, 255, 255, 0);
    border-radiums: 2em;
  `,
};

const Home = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [results, setResults] = useState(null);

  const handleData = (data) => {
    setIsFormSubmitted(true);
    setResults(data);
  };

  const restartForm = () => {
    setIsFormSubmitted(false);
    setResults(null);
  };

  return (
    <Styled.Container>
      <h1>PGA Putting - Green Grid Reading</h1>

      {isFormSubmitted ? (
        <>
          <Styled.SubmissionHeader>
            Based on your input, our calculations suggest the below:
          </Styled.SubmissionHeader>
          <Styled.ResultsContainer>
            <Styled.ResultsItem>
              Move {results.clickCount} clicks to either left or right.
            </Styled.ResultsItem>
            <Styled.ResultsItem>
              {results.elevationData.direction === 'up' ? 'Add' : 'Substract'}{' '}
              {results.elevationData.adjustedTotalFeet} feet.
            </Styled.ResultsItem>
          </Styled.ResultsContainer>

          <Styled.Button type="button" onClick={restartForm}>
            Restart
          </Styled.Button>
        </>
      ) : (
        <PuttForm renderResults={handleData} />
      )}
    </Styled.Container>
  );
};

export default Home;
