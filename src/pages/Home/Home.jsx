import React, { useState } from 'react';
import styled from 'styled-components';

import PuttForm from './PuttForm';

const Styled = {
  Container: styled.div`
    display: flex;

    align-items: center;
    flex-direction: column;

    margin-bottom: 50px;
  `,
  SubmissionContainer: styled.div`
    max-width: 500px;
    width: 100%;
  `,
  SubmissionHeader: styled.div`
    margin: 10px auto;
  `,
  ResultsContainer: styled.div`
    margin: 10px auto;
  `,
  ResultsItem: styled.div`
    margin: 5px auto 5px 20px;
  `,
  Button: styled.button`
    background-color: #4e9af1;
    border: 2px solid #368def;
    color: white;
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
    margin-top: 20px;
    padding: 10px 20px;

    &:hover {
      background-color: #368def;
    }
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
        <Styled.SubmissionContainer>
          <Styled.SubmissionHeader>
            Based on your input, our calculations suggest the below:
          </Styled.SubmissionHeader>
          <Styled.ResultsContainer>
            <Styled.ResultsItem>
              Move {results.clickCount} clicks to either left or right
            </Styled.ResultsItem>
            <Styled.ResultsItem>
              {results.elevationData.direction === 'up' ? 'Add' : 'Substract'}{' '}
              {results.elevationData.adjustedTotalFeet} feet as total hole
              distance
            </Styled.ResultsItem>
          </Styled.ResultsContainer>

          <Styled.Button type="button" onClick={restartForm}>
            Restart
          </Styled.Button>
        </Styled.SubmissionContainer>
      ) : (
        <PuttForm renderResults={handleData} />
      )}
    </Styled.Container>
  );
};

export default Home;
