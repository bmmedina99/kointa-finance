import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <div className='container mx-auto px-4 py-4 flex justify-between items-center'>
        <h1 className='text-periwinkle text-2xl font-bold'>
          Next.js App Router
        </h1>
        <nav className='space-x-6'>
          <Link
            href='#features'
            className='text-gray-400 hover:text-gray-100'
          >
            Funcionalidades
          </Link>
          <Link
            href='/contacto'
            className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
