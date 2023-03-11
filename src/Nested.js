import { useObservableState } from "observable-hooks";

function Nested({ doc }) {
  const address = useObservableState(doc.address$, doc.address);
  return <div>{address.city}</div>;
}

export default Nested;
