import React from 'react'
import { useParams } from 'react-router-dom'

export default function Index() {
  // useParams
  const { userId } = useParams();

  return (
    <div>
      User Id: {userId}
    </div>
  )
}
