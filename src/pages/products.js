import { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('データ取得エラー:', err));
  }, []);

  return (
    <div>
      <h1>商品一覧</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name}（{p.price}円）
          </li>
        ))}
      </ul>
    </div>
  );
}
