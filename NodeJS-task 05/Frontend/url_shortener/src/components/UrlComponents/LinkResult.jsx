import React, { useEffect, useState } from "react";
import axios from "axios";
import CopyToClipboard from "react-copy-to-clipboard";

const LinkResult = ({ url }) => {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // console.log(url.length)
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.post("https://url-shortener-83vp.onrender.com/url", { url });
      setShortenLink(res.data.short_URl);
      console.log(res.data.short_URl);
    } catch (err) {
      setError(err);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url.length) {
      fetchData();
    }
  }, [url]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  if (loading) {
    return <p className="noData">Loading...</p>;
  }
  if (error) {
    return <p className="noData">Something written wrong :(</p>;
  }

  return (
    <>
      {shortenLink && (
        <div className ="result">
          <p>https://url-shortener-83vp.onrender.com/url/{shortenLink}</p>
          <CopyToClipboard text={"https://url-shortener-83vp.onrender.com/url/"+shortenLink} onCopy={() => setCopied(true)}>
            <button className={copied ? "copied" : ""}>
              Copy to Clipboard
            </button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
};

export default LinkResult;
