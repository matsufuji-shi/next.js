import {useState} from 'react';

// 送信時”Method not allowed”と出る。許可されてない的な感じ
export default function Form(){
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/add-product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, price }),
    });
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="名前"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="年齢"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">送信</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}