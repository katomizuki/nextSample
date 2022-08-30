import internal from "stream";
import { createDeflate } from "zlib";

export type Blog = {
    title: string;
    content: string;
    eyecatch: string;
    category: string;
    id: string;
};
