import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [to, setTo] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://form-email-be.vercel.app/emails', {
        to,
        subject,
        text,
      });
      console.log(response.data);
      alert('Email terkirim!');
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan saat mengirim email.');
    }
  };

  return (
    <div className="container">
      <h2 className="heading">Kirim Email</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="to" className="label">Email Penerima:</label>
          <input
            type="email"
            id="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject" className="label">Subjek:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="text" className="label">Pesan:</label>
          <textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
            style={{ minHeight: '100px' }}
            className="textarea"
          ></textarea>
        </div>
        <button type="submit" className="button">Kirim</button>
      </form>
    </div>
  );
}

export default App;
