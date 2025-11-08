import Link from 'next/link'

export default function Home() {
  return(
  <div className="min-h-screen  from-purple-50 to-purple-100 flex items-center justify-center">
    <div className="container mx-auto px-4 py-16">
      <h1 className='text-center'>
        Inventory Management
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto">
        Streamline your inventory trackinh with our powerful, easy-to-use
        managment system. Track products,  monitor stock levels, and gain valuable insights
      </p>
      <div className='flex gap-4 justify-center'>
        <Link href="/sign-in">
        Sign-in
        </Link>
        <Link href="#">
        Learn more
        </Link>
      </div>
    </div>
  </div>

)}