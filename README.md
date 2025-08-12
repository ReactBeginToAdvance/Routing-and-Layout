# React Routing and Layout

This is a simple React app showing how to use **React Router** with a **common layout** (navigation + page content).

## Features
- Basic navigation using `react-router-dom`
- Common layout that wraps all pages
- Multiple routes: Home, About, Contact

## Code Example
```jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router";

const Layout = ({ children }) => {
  return (
    <div>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      <hr />
      <div>{children}</div>
    </div>
  );
};

const Home = () => <h2>🏠 Home Page</h2>;
const About = () => <h2>ℹ️ About Page</h2>;
const Contact = () => <h2>📞 Contact Page</h2>;

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

```
## How it Works

- Layout is the common wrapper for all pages (navigation + children)
- Routes decides which page to render based on the URL
- Link is used for navigation without page reloads

## Dependencies
react-router

## Output

<img width="960" height="116" alt="1" src="https://github.com/user-attachments/assets/9f00ebcd-2021-457b-b275-25c10f99b312" />

<img width="960" height="133" alt="2" src="https://github.com/user-attachments/assets/ffa9f71d-3639-49e6-9e90-6535d8cbe0af" />

<img width="960" height="168" alt="3" src="https://github.com/user-attachments/assets/2f636bb9-b452-4f9b-a092-e76c89696595" />

<img width="960" height="108" alt="4" src="https://github.com/user-attachments/assets/8693fbf2-9955-418c-964a-49f23c126b6b" />

