import axios from "axios";
import { useState, useEffect } from "react";
import { IItemInstractions } from "../interfaces/item-instractions";

export const useFetchData = () => {
  const [instractions, setInstractions] = useState<IItemInstractions[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((response: { data: IItemInstractions[] }) => {
        setInstractions(response.data);
      });
  }, []);

  return { instractions };
};
