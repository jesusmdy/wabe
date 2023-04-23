import { ElementType } from "@/interface/element/element";
import { DetailedReactHTMLElement, PropsWithChildren } from "react";

interface ElementInterface extends DetailedReactHTMLElement<PropsWithChildren<any>, HTMLElement> {
    id: string;
    type: ElementType;
    name?: string;
}

export type Element = ElementInterface;