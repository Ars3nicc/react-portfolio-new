import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className='text-center py-3'>
        <p>&copy; <b>{currentYear}</b> Franz Manrique's Digital Portfolio | All rights reserved | Version 1.1</p>
      </footer>
    </div>
  )
}
