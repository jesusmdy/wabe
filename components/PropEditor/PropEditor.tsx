'use client'
import { Element } from "@/types/element";
import { Prop } from "@/types/prop";
import { ChangeEvent, FC, Fragment, useState } from "react";
import ColorType from "./ColorType";
import { elementsStore } from "@/store/elements";

export type ChangeType = (e: ChangeEvent<HTMLInputElement>) => void;

const getProp = (prop: string, value: string) => {
    const propArray = prop.split('.');
    const propObject = propArray.reduceRight((prev: any, curr) => {
        return {
            [curr]: prev,
        };
    }, value);
    return propObject;
};

const deepMergeObjects = (target: any, source: any) => {
    const output = { ...target };
    if (typeof target !== 'object') {
        return source;
    }
    Object.keys(source).forEach(key => {
        const sourceValue = source[key];
        if (key in target) {
            output[key] = deepMergeObjects(target[key], sourceValue);
        } else {
            output[key] = sourceValue;
        }
    });
    return output;
};

const renderInput = (
    prop: Prop,
    value: string | null,
    onChange: ChangeType
) => {
    switch (prop.type) {
        case 'string':
            return 'string';
        case 'number':
            return 'number';
        case 'boolean':
            return 'boolean';
        case 'color':
            return <ColorType prop={prop} value={value} onChange={onChange} />;
        default:
            return 'unsupported';
    }
};

const PropEditor: FC<{
    element: Element;
    prop: Prop;
}> = ({ element, prop }) => {
    const [value, setValue] = useState<string | null>('');
    const updateElement = elementsStore(state => state.updateElement)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);

        const propObject = getProp(prop.path, e.target.value);

        updateElement(
            {
                ...element,
                props: deepMergeObjects(element.props, propObject),
            }
        );
    };

    return (
        <Fragment>
            {
                renderInput(prop, value,  onChange)
            }
        </Fragment>
    );
};

export default PropEditor;
