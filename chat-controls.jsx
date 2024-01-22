import React, { useState } from 'react';
import { MultiSelect, Button, Flex, Modal, Stack, TextInput, PasswordInput, Select, lighten } from '@mantine/core';

export function ChatControls() {
  const [accountModalIsVisible, setAccountModalIsVisible] = useState(false);
  const [ChatModalIsVisible, setChatModalIsVisible] = useState(false);

  const openAccountModal = () => {
    setAccountModalIsVisible(true);
  };

  const closeAccountModal = () => {
    setAccountModalIsVisible(false);
  };

  const openChatModal = () => {
    setChatModalIsVisible(true);
  };

  const closeChatModal = () => {
    setChatModalIsVisible(false);
  };

  return (
    <div>
      <Flex
        mih={50}
        bg="rgba(0, 0, 0, 0.8)"
        gap="lg"
        justify="flex-start"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <Button variant="outline" color="white" onClick={openAccountModal}>Account</Button>
        <Modal opened={accountModalIsVisible} onClose={closeAccountModal} title="Authentication">
          <Stack spacing="lg">
            <TextInput label="Name or Email" placeholder="Enter your name or email" />
            <PasswordInput label="Password" placeholder="Enter your password" />
            <Button variant="outline" color="pink" justify="center">Login</Button>
          </Stack>
        </Modal>

        <Button variant="outline" onClick={openChatModal}>New Chat</Button>
        <Modal opened={ChatModalIsVisible} onClose={closeChatModal} title="Select Contact">
        
        <MultiSelect mt="md" placeholder="Pick value" data={['React', 'Angular', 'Vue', 'Svelte']} />
          {/* <Flex gap="lg"> */}
            <Button mt="md" variant="outline" color="pink" justify="center">Create Chat</Button>
            <Button mt="md" spacing="20" variant="outline" color="pink" justify="center">Create Group</Button>
          
          {/* </Flex> */}
          
        </Modal>
      </Flex>
    </div>
  );
}
