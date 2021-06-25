import React from 'react';

type helloProps = {
  color: string;
  name: string;
  isSpecial?: boolean
}
function Hello({ color, name, isSpecial }: helloProps) {
  return (
    <div>
      { color }
      Hi! I am {name}
    </div>
  )
}

export default Hello;
