import { Link } from '@tanstack/react-router';

function Header() {
  return (
    <header className='pb-2 flex gap-2 justify-between'>
      <nav className='flex flex-row'>
        <div className='font-bold'>
          <Link to='/'>Home</Link>
        </div>
      </nav>
    </header>
  );
}

export { Header };
