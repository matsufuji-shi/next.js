import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div>
      {/* ヘッダー */}
      <header>
        <nav>
          <ul>
            <li><Link href="/">ホーム</Link></li>
            <li><Link href="/about">アバウト</Link></li>
            <li><Link href="/contact">連絡先</Link></li>
          </ul>
        </nav>
      </header>

      {/* メインコンテンツ */}
      <main>
        {children}
      </main>

      {/* フッター */}
      <footer>
        <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;