export default function FSXLayout({ children }) {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="/fsx/consulting">Consulting</a></li>
          <li><a href="/fsx/development">Tech</a></li>
          <li><a href="/fsx/ventures">Events</a></li>
          <li><a href="/fsx/foundation">Labs</a></li>
          <li><a href="/fsx/foundation">Connect</a></li>
          <li><a href="/fsx/foundation">Academy</a></li>
          <li><a href="/fsx/foundation">Labs</a></li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
