import axios from 'axios';
import { useState } from 'react';
import './Chatbot.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Navbar from '../../Components/Navbar/Navbar'
function Chatbot() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  async function generateAnswer() {
    if (!question.trim()) return;
    const token = localStorage.getItem('token');
    if (!token) {
      setAnswer('Please sign in to use the chatbot.');
      return;
    }

    setAnswer("Loading...");
    try {
      const response = await axios.post('http://localhost:3333/chatbot/answer',
        { question: question.trim() },
        { headers: { Authorization: token } }
      );
      const strippedAnswer = response.data.answer.replace(/\*/g, '');
      setAnswer(strippedAnswer);
    } catch (error) {
      setAnswer(error.response?.status === 401
        ? 'Please sign in to use the chatbot.'
        : 'The chatbot is temporarily unavailable. Please try again.');
    }
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
        event.target.blur(); // Remove focus from the textarea
      generateAnswer();
    }
  }

  return (
    <>
    <Navbar/>
    <div className="chatbot">
      
    <div class="section-title">
          <h2>ChatBot</h2>
          <p>Your Medical Chatbot</p>
        </div>
      <div className="chat">
        <div className="message patient-message">
          <p className="text">Hello Doctor, I have a question...</p>
        </div>
        <div className="message doctor-message">
          <p className="text">Sure, go ahead and ask.</p>
        </div>
        {/* Display previous messages here */}
      </div>
      <div className="input">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyPress={handleKeyPress} // Call handleKeyPress function when Enter key is pressed
          placeholder="Type your question here..."
        ></textarea>
        <button onClick={generateAnswer}><ArrowUpwardIcon/></button>
      </div>
      <div className="answer-container">
        {answer && <p className="answer">{answer}</p>}
      </div>
    </div>
    </>
  );
}

export default Chatbot;
