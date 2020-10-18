import React from 'react'

export function Form() {
  return <form>
        <input type='text' name='title' />
        <textarea name='body' />
        <div className='actions'>
          <input type='submit' className='button' />
        </div>
      </form>
}


