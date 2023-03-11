import { useEffect, useState } from 'react';

function Nested({ doc }) {
  const [address, setAddress] = useState(doc.address);

	useEffect(() => {
		const sub = doc.address$.subscribe((val) => {
			setAddress(val);
		});
		return () => {
			if (sub && sub.unsubscribe) sub.unsubscribe();
		};
	}, [doc.address$]);

  return <div>{address.city}</div>;
}

export default Nested;
