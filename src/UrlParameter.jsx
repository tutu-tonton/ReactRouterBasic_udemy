import { useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>UrlParameter Page</h1>
      <p>{id}</p>
    </div>
  );
};
