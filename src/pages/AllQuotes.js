import QuoteList from '../components/quotes/QuoteList';

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

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_DATA} />;
};

export default AllQuotes;
