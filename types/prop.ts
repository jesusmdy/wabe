export type PropType = 'color' | 'string' | 'number' | 'boolean' | 'enum' | 'array' | 'object' | 'function' | 'slot';

export type Prop = {
    label: string;
    path: string;
    type: PropType;
};