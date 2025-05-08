import { Link } from '@tanstack/react-router';
import { Separator } from '@/components/ui/separator';

function Footer() {
  return (
    <footer>
      <Separator className='my-4' />

      <div>
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/signup'>Register</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export { Footer };
