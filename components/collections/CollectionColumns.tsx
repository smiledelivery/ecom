"use client";

import { ColumnDef } from "@tanstack/react-table";
import Delete from "../custom Ui/Delete";
import Link from "next/link";

export const columns: ColumnDef<CollectionType>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => <p>{row.original.title}</p>,
  },
  {
    accessorKey: "products",
    header: "Products",
    cell: ({ row }) => <p>{row.original.products.length}</p>,
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <Delete
      //  item="collection" id={row.original._id}
      />
    ),
  },
];
