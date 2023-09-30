"use client";

import { collection, getDocs } from "firebase/firestore";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { db } from "./firebase";

interface Products {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
}

interface Provider {
  data: Products[];
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

export const ProductContext = createContext<Provider>({
  data: [],
  search: "",
  setSearch: function (value: SetStateAction<string>): void {
    throw new Error("Function not implemented.");
  },
});
const dataCollection = collection(db, "products");

export default function ProductProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setData] = useState<Products[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      const querysnapshot = await getDocs(dataCollection);
      const AllData: Products[] = [];
      querysnapshot.forEach((product) =>
        AllData.push({
          id: product.id,
          ...product.data(),
        } as Products)
      );
      setData(AllData);
    })();
  }, []);

  return (
    <ProductContext.Provider value={{ data, search, setSearch }}>
      {children}
    </ProductContext.Provider>
  );
}
