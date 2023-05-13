import { ChangeEvent, FC, Fragment, useState } from "react";
import { ColorResult, SketchPicker } from "react-color";
import { ChangeType } from "./PropEditor";
import { Box, Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, Text, PopoverTrigger } from "@chakra-ui/react";
import { Prop } from "@/types/prop";

export const ColorType: FC<{
    prop: Prop;
    value: string | null;
    onChange: ChangeType;
}> = ({ value, onChange, prop }) => {
    const [color, setColor] = useState<string>();

    const onColorChange = (val: ColorResult) => {
        setColor(val.hex);
        onChange({
            target: {
                value: val.hex
            },
        } as ChangeEvent<HTMLInputElement>);
    };

    return (
        <Popover>
            <PopoverTrigger>
                <Button
                    colorScheme="blackAlpha"
                    w="100%"
                    justifyContent="flex-start"
                    gap={2}
                    fontSize="sm"
                >
                    <Box
                        w="20px"
                        h="20px"
                        borderRadius="3px"
                        bgColor={color}
                    />
                    <Text>{prop.label}</Text>
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                    <SketchPicker
                        color={color}
                        onChangeComplete={onColorChange}
                    />
                </PopoverBody>
            </PopoverContent>
        </Popover>
    );
};

export default ColorType;
