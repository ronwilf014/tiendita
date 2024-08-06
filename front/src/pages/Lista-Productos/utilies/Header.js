import { Filters } from './Filter.js'


export function Header() {
  return (

    <header>
      <h1>React Shop <span className="material-symbols-outlined">
        shopping_cart_checkout
      </span></h1>
      <Filters/>
    </header>

  )
} 