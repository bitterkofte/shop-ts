import { StoreItem } from '../components/StoreItem'
import storeItems from '../data/items.json'

export const Store = () => {
  return (
    <div>
      <div className='grid lg:grid-cols-4 gap-10 transition-all duration-200'>
        {storeItems.map(item => (
          // <div>{ JSON.stringify(item) }</div>
          <StoreItem key={item.id} {...item}/>
        ))}
      </div>
    </div>
  )
}