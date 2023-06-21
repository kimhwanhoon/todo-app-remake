import React from 'react';
import { useParams } from 'react-router-dom';

function TodoDetail() {
  const param = useParams();
  console.log(param);
  return <div>Detail</div>;
}

export default TodoDetail;
