import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    '241154e5-b3aa-4c4b-9fe9-1bc843ae2de6',
    props.user.username,
    props.user.secret
  );
  
  return (
    <div style={{ height: '100vh' }}>
      <PrettyChatWindow 
        projectId='241154e5-b3aa-4c4b-9fe9-1bc843ae2de6'
        username={props.user.username}
        secret={props.user.secret}
        style={{ height: '100vh' }}
      />
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
    </div>
  )
}

export default ChatsPage