import React from "react";
import { Box, IconButton, HStack, Icon } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const MobileNav = ({ currentHole, setCurrentHole }) => {
  return (
    <Box width="full">
      <HStack justify="space-between">
        <IconButton icon={<Icon as={FaArrowLeft} />} onClick={() => setCurrentHole(currentHole - 1)} isDisabled={currentHole === 0} aria-label="Previous Hole" />
        <Box fontWeight="bold">{`Hole ${currentHole + 1}`}</Box>
        <IconButton icon={<Icon as={FaArrowRight} />} onClick={() => setCurrentHole(currentHole + 1)} isDisabled={currentHole === 17} aria-label="Next Hole" />
      </HStack>
    </Box>
  );
};

export default MobileNav;
