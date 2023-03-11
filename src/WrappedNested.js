import { useObservableState, useObservable } from "observable-hooks";

function WrappedNested({ doc }) {
  const address$ = useObservable(() => doc.address$);
  const address = useObservableState(address$, doc.address);
  return <div>{address.city}</div>;
}

export default WrappedNested;
