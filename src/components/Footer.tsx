const Footer = () => {
  return (
    <footer className='bg-gradient-to-tr from-russian-violet to-rebecca-purple text-periwinkle border-t'>
      <div className='container mx-auto px-4 py-8 text-center'>
        © {new Date().getFullYear()}. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer
