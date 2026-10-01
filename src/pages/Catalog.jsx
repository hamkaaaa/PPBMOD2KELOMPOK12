import { useState } from 'react'
import GUNS from '../data/guns.js'
import GunCard from '../components/GunCard.jsx'

function Catalog() {
  const [filter, setFilter] = useState('All')

  const categories = ['All', 'Pistol', 'Rifle', 'Shotgun']

  const filteredGuns =
    filter === 'All'
      ? GUNS
      : GUNS.filter((gun) => gun.type.toLowerCase() === filter.toLowerCase())

  return (
    <div className="page">
      <div className="masthead">
        <h1 className="display">Available Armament</h1>
        <p className="lede">
          Curated firearms in stock and ready for immediate transfer. Inspection guaranteed.
        </p>
      </div>

      <div className="list-head">
        <div className="filters" style={{ display: 'flex', gap: '8px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={filter === cat ? 'nav-link active' : 'nav-link'}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <span className="count">{filteredGuns.length} items</span>
      </div>

      <ul className="stock">
        {filteredGuns.map((gun, idx) => (
          <GunCard key={idx} gun={gun} />
        ))}
      </ul>
    </div>
  )
}

export default Catalog