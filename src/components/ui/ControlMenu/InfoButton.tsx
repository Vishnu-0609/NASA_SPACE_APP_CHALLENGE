// InfoButton.tsx
import {  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import { Button } from '@nextui-org/react';
import { IconInfoCircle } from '@tabler/icons-react';

const InfoButton = () => {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
    <Button 
      isIconOnly 
      onPress={onOpen}
      color='secondary' 
      variant='flat'
    >
      <IconInfoCircle />
    </Button>
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="opacity-90">
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1">Solar System</ModalHeader>
          <ModalBody>
            <p>Todo:</p>
            <ul className="text-sm">
              <li>Earths moon</li>
              <li>Accurate Lighting</li>
              <li>Accurate planet atmospheres</li>
              <li>Clipping through objects</li>
              <li>Bugs</li>
            </ul>
            <p>Read more about it on <a className="text-secondary" target="_blank" rel="noopener noreferrer" href="https://github.com/Vishnu-0609/NASA_SPACE_APP_CHALLENGE">Repo link</a>.</p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  </Modal>
  </>
  );
};

export default InfoButton;
