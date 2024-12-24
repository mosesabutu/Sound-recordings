import { useNavigate, useLocation } from "react-router";

export default function WithRouter(OriginalComponent) {
  return function NewComponent(props) {
    const navigate = useNavigate();
    const location = useLocation();
    return <OriginalComponent navigate={navigate} location={location} {...props} />

  };
}

