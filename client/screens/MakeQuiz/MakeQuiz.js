import React from 'react';
import { NavLink } from "react-router-dom";
import Layout from '../../components/shared/Layout/Layout';
import './MakeQuiz.css';

const MakeQuiz = () => {
  return (
    <Layout>
      {/* There will need to be ten questions added to a quiz (how do I validate that?) so to do that I need to make sure that when a user makes a quiz, they can give it the following:
A title
Their username associated with it
A text block to create a question
Four possible answers and a way to verify which answer is the correct one
This quiz should have full CRUD capability */}
    </Layout>
  );
}

export default MakeQuiz;