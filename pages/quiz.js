import React from 'react';

import db from '../db.json';

import Head from 'next/head';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'



export default function Quiz() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz - Astronomia</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Pergunta 1 de 5</h1>
          </Widget.Header>
          <Widget.Content>
            <img src={db.questions[0].image} alt=""/>  
            <p>{db.description}</p>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
            }}
            >
              <button type="submit">
                Confirmado 
              </button>
            </form>
          </Widget.Content>
        </Widget>

        
      </QuizContainer>
    </QuizBackground>
  );
}