"use client";
import CollectionForm from "@/components/collections/CollectionForm";
import Loader from "@/components/custom Ui/Loader";
import React, { useEffect, useState } from "react";

const CollectionDetails = ({
  params,
}: {
  params: { collectionId: string };
}) => {
  const [loading, setLoading] = useState(true);
  const [collectionDetails, setCollectionDetails] =
    useState<CollectionType | null>(null);

  const getCollectionsDetails = async () => {
    try {
      const res = await fetch(`/api/collections/${params.collectionId}`, {
        method: "GET",
      });
      const data = await res.json();
      setCollectionDetails(data);
      setLoading(false);
    } catch (err) {
      console.log("[collections_GET]", err);
    }
  };

  useEffect(() => {
    getCollectionsDetails();
  }, []);
  return loading ? <Loader /> : (
    <CollectionForm initialData={collectionDetails} />
  )
};

export default CollectionDetails;
