import { useObservableState } from 'observable-hooks';

function Single({ doc }) {
  const firstName = useObservableState(doc.firstName$, doc.firstName);
  return <div>{firstName}</div>;
}

export default Single;
