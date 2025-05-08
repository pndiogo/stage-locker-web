import type { PropsWithChildren } from 'react';

type Props = {} & PropsWithChildren;

function Layout({ children }: Props) {
  return <div className='mx-auto max-w-6xl px-4 py-8'>{children}</div>;
}

export { Layout };
