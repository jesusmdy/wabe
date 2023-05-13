import { elementsStore } from "@/store/elements";
import { selectedElementStore } from "@/store/selectedElement";
import { FC, Fragment, useMemo } from "react";
import BasicProps from "./BasicProps";
import { Element } from "@/types/element";
import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Tag, Text } from "@chakra-ui/react";
import { UpDownIcon } from "@chakra-ui/icons";

const Editor: FC<{
    element: Element;
}> = ({ element }) => {
    return (
        <Box
            flex={1}
            p={2}
        >
            <Flex px={6} py={2}>
                <Text fontSize="lg">{element.name}</Text>
            </Flex>
            <Box p={2}>
                <BasicProps element={element} />
            </Box>
        </Box>
    );
};

const ElementEditor: FC = () => {
    const elements = elementsStore((state) => state.elements);

    return (
        <Fragment>
            <Tabs
                variant="soft-rounded"
            >
                <TabList
                    flexDir="column"
                    p={4}
                >
                    {
                        elements.map(
                            (element) => (
                                <Tab
                                    key={element.id}
                                    justifyContent="flex-start"
                                >
                                    <UpDownIcon mr={2} />
                                    <Text as="span">{element.name}</Text>
                                </Tab>
                            )
                        )
                    }
                </TabList>
                <TabPanels
                    borderTop="1px solid"
                    borderColor="gray.700"
                >
                    {
                        elements.map(
                            (element) => (
                                <TabPanel
                                    key={`panel-${element.id}`}
                                    p={0}
                                >
                                    <Editor key={element.id} element={element} />
                                </TabPanel>
                            )
                        )
                    }
                </TabPanels>
            </Tabs>
        </Fragment>
    );
};

export default ElementEditor;
