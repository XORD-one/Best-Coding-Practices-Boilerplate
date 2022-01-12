import React, { FC, useEffect, useState } from 'react';

type Props = { id?: string };

const JestDemo: FC<Props> = props => {
  const [user, setUser] = useState<{ age: number; name: string } | null>(null);

  async function fetchUser(id: string): Promise<void> {
    const response = await fetch('/' + id);
    setUser(await response.json());
  }

  useEffect(() => {
    if (props.id) fetchUser(props.id);
  }, [props.id]);

  return (
    <div className="container">
      <h1>{user?.name}</h1>
      <h2>{user?.age}</h2>
    </div>
  );
};

export default JestDemo;
