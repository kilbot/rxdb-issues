import { useEffect, useState } from 'react';

function Single({ doc }) {
  const [firstName, setFirstName] = useState(doc.firstName);

	useEffect(() => {
		const sub = doc.firstName$.subscribe((val) => {
			setFirstName(val);
		});
		return () => {
			if (sub && sub.unsubscribe) sub.unsubscribe();
		};
	}, [doc.firstName$]);

  return <div>{firstName}</div>;
}

export default Single;
