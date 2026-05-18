// Importing the external css layout file
import './articleStyle.css';
// Importing your asset image 
import heroImage from './assets/hero.png';

function ArticlePage() {
  return (
    <div className="articleContainer">
      {/* 1. Article Title Header */}
      <h1 className="articleTitle">Discovering the Magic of React</h1>

      {/* 2. Content Visual Banner */}
      <img src={heroImage} alt="React Banner" className="articleBanner" />

      {/* 3. Core Written Paragraph Content */}
      <p className="articleBody">
        React makes it painless to create interactive UIs. Design simple views for 
        each state in your application, and React will efficiently update and render 
        just the right components when your data changes. Declarative views make 
        your code more predictable and easier to debug.
      </p>
    </div>
  );
}

export default ArticlePage;
