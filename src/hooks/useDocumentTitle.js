import { useEffect } from "react";

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
    return () => {
      //whenever we increase or change the name, we see clean up message
      console.log("clean up ");
    };
  });
}
//componentDidMount()
//componentUpdate()
//componentWillUnmount() for where we write clean up code
