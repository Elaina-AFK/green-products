"use client";
import { FormEvent, useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { Card } from "../Card";
import Image from "next/image";

const dataCollection = collection(db, "products");

interface Products {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
}

export default function Admin() {
  const [data, setData] = useState<Products[] | null>(null);
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
    })();
  }, []);

  const handleUpdate = async (updateProduct: Products) => {
    const { id, ...updateData } = updateProduct;
    const docRef = doc(db, "products", id);

    await updateDoc(docRef, updateData);
  };

  return (
    <main className="bg-slate-400 grid min-h-screen">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        data?.map((product) => (
          <ProductList
            product={product}
            key={product.id}
            onUpdate={handleUpdate}
          />
        ))
      )}
    </main>
  );
}

interface ProductForm {
  name: string;
  subtitle: string;
  description: string;
  image: File;
}

function ProductList({
  product,
  onUpdate,
}: {
  product: Products;
  onUpdate: (updateData: Products) => void;
}) {
  const [edit, setEdit] = useState(false);
  const formId = (+new Date(product.id)).toString(32);

  const handleUpdate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const myFormData = new FormData(e.target as HTMLFormElement);
    const updateForm: ProductForm = Object.fromEntries(
      myFormData
    ) as unknown as ProductForm;
    if (updateForm.image.size == 0) {
      const updateData: Products = {
        id: product.id,
        name: updateForm.name,
        subtitle: updateForm.subtitle,
        description: updateForm.description,
        image: product.image,
      };
      onUpdate(updateData);
      return;
    }
    if (updateForm.image) {
      const reader = new FileReader();
      reader.readAsDataURL(updateForm.image);
      reader.onloadend = (event: ProgressEvent<FileReader>) => {
        const updateData: Products = {
          id: product.id,
          name: updateForm.name,
          subtitle: updateForm.subtitle,
          description: updateForm.description,
          image: event.target?.result?.toString() ?? product.image,
        };
        onUpdate(updateData);
        return;
      };
    }
  };

  return (
    <>
      {edit ? (
        <form onSubmit={handleUpdate} className="text-black" id={formId}>
          <InputProduct
            name="name"
            value={product.name}
            id={"name: " + product.name}
          />
          <InputProduct
            name="subtitle"
            value={product.subtitle}
            id={"subtitle: " + product.name}
          />
          <div>
            <label htmlFor={"description: " + product.name}>
              {"description"}
            </label>
            <textarea
              required
              id={"description: " + product.name}
              form={formId}
              name="description"
              defaultValue={product.description}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
          </div>
          <div>
            <label htmlFor={"image: " + product.name}>{"image (.png)"}</label>
            <Image
              src={product.image}
              width={40}
              height={40}
              alt={product.name}
            />
            <input type="file" name={"image"} id={"image: " + product.name} />
          </div>
          <button type="submit">Update</button>
          <button onClick={() => setEdit(false)}>Cancel</button>
        </form>
      ) : (
        <div className="flex">
          <Card data={product} />
          <button
            className="h-12 w-28 -ml-32 border border-y-2 border-purple-500"
            onClick={() => setEdit(true)}
          >
            Edit
          </button>
        </div>
      )}
    </>
  );
}

function InputProduct({
  value,
  id,
  name,
}: {
  value: string;
  id: string;
  name: string;
}) {
  return (
    <div>
      <label htmlFor={id}>{name}</label>
      <input type={"text"} defaultValue={value} name={name} id={id} required />
    </div>
  );
}
