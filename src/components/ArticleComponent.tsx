import { Card } from "react-bootstrap";
import { IArticle } from "../interfaces/IArticle";
import { Link } from "react-router-dom";

interface ArticleComponentProps {
  article: IArticle;
}

const ArticleComponent = ({ article }: ArticleComponentProps) => {
  return (
    <Card>
      <Link to={`/ArticleDetails/${article.id}`}>
        <Card.Img variant="top" src={article.imageUrl} />
        </Link>
        <Card.Body>
        <Link to={`/ArticleDetails/${article.id}`}
        style={{ textDecoration: 'none' }} // Rimuove le decorazioni del link
        className="text-dark" // Imposta il colore del testo a nero
        >
          <Card.Title className="text-dark title-hover">{article.title}</Card.Title>
        </Link>
          <Card.Text>{article.summary}</Card.Text>
        </Card.Body>
      
    </Card>
  );
};
export default ArticleComponent;
