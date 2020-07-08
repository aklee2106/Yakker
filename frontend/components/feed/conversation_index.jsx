import React from 'react';
import ConversationIndexItem from './conversation_index_item';
import CommentFormContainer from '../comments/comment_form_container';


class ConversationIndex extends React.Component {
  componentDidMount() {
    this.props.fetchConversations();
    this.props.fetchUsers();
    this.props.fetchLikes();
  }

  render() {
  
    const { conversations, users, currentGroup, currentUser, likes} = this.props;

    if (Object.values(users).length <2 ){
      return null;
    }

    const filteredConversations = currentGroup ? 
      
      conversations.filter(convo=>(
        convo.group_id === currentGroup.id
      )) : 
      conversations

    return (
      <div>
        <ul>
          {
            filteredConversations.map(conversation => (
             <ConversationIndexItem conversation={conversation}
              key={conversation.id}
              users={users}
              currentUser = {currentUser}
              deleteConversation={this.props.deleteConversation}
              likes = {likes}
              createLike = {this.props.createLike}
              deleteLike = {this.props.deleteLike}
            />
            ))
          }
          
        </ul>
        
      </div>
    );
  }
}

export default ConversationIndex;