import { useState, useEffect } from "react";

import "./App.css";
import { document } from "./database";
import Single from "./Single";
import Nested from "./Nested";
import WrappedNested from "./WrappedNested";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    document.then((doc) => {
      setData(doc);
    });
  }, []);

  return data ? (
    //<Single doc={data} />
    <Nested doc={data} />
  ) : null;
}

export default App;
