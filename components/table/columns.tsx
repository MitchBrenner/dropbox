"use client"

import { FileType } from "@/typings"
import { ColumnDef } from "@tanstack/react-table"
import prettyBytes from "pretty-bytes"
import { FileIcon, defaultStyles } from "react-file-icon"


export const columns: ColumnDef<FileType>[] = [
    {
        accessorKey: "type",
        header: "Type",
        cell: ({ renderValue, ...props }) => {
            const type = renderValue() as string;
            const extenson: string = type.split("/")[1];
            return (
                <div className="w-10">
                    <FileIcon 
                        extension={extenson}
                        // labelColor={COLOR_EXTENSION_MAP[extenson]}
                        // @ts-ignore
                        {...defaultStyles[extenson]}
                    />
                </div>
            )
        }
    },
    {
        accessorKey: "filename",
        header: "Filename",
    },
    {
        accessorKey: "timestamp",
        header: "Date Uploaded",
        cell: ({ renderValue, ...props }) => {
            return <span>{(renderValue() as Date).toLocaleDateString()}<br/>
            {(renderValue() as Date).toLocaleTimeString()}
            </span>
        }
    },
    {
        accessorKey: "size",
        header: "Size",
        cell: ({ renderValue, ...props }) => {
            return <span>{prettyBytes(renderValue() as number)}</span>
        }
    },
    {
        accessorKey: "downloadURL",
        header: "Link",
        cell: ({ renderValue, ...props }) => {
            return (
                <a href={renderValue() as string} target="_blank" className="text-blue-500 hover:text-blue-600">
                    Download
                </a>
            )
        }
    }
]
