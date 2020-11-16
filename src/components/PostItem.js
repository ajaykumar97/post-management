import React from 'react';

export default function PostItem({ post, deletePost }) {
  return (
    <div
      style={{
        marginTop: 10,
        background: '#0A79DF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex'
      }}
    >
      <div style={{ flex: 1, marginRight: 10, }}>
        <p
          style={{
            marginTop: 0,
            marginBottom: 0,
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold'
          }}
        >
          {post.title}
        </p>
        <p
          style={{
            marginTop: 0,
            marginBottom: 0,
            color: 'white',
            fontSize: 14
          }}
        >
          {post.body}
        </p>
      </div>

      <button
        style={{
          paddingLeft: 25,
          paddingRight: 25,
          paddingTop: 10,
          paddingBottom: 10,
          background: '#E8290B',
          color: 'white',
          borderRadius: 5,
          borderWidth: 0,
          overflow: 'hidden'
        }}
        onClick={() => deletePost(post)}
      >
        Delete
        </button>
    </div>
  )
}
