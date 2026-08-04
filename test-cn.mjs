import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
const cn = (...inputs) => twMerge(clsx(inputs));
console.log(cn("lyra-tab-overflow-collapsed [&>*]:flex-1 flex items-stretch gap-2 border-b border-lyra-border-subtle py-1.5", "flex-1 min-w-0 self-stretch border-b-0"));
