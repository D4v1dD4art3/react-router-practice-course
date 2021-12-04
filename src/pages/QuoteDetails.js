import { useParams, Route, Link } from 'react-router-dom';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';
const DUMMY_DATA = [
  {
    id: 'q1',
    author: 'David',
    text: 'Learning react its fun',
  },
  {
    id: 'q2',
    author: 'Moises',
    text: 'Learning react its great',
  },
];
const QuoteDetails = () => {
  const params = useParams();
  const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p> no quote found</p>;
  }
  return (
    <>
      <h1>QuoteDetails</h1>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetails;
