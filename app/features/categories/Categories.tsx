import React from 'react'
import type { RootState } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import Category from '../../Category/Category';

export default function Categores({timeframe}) {
  const categories = useSelector((state: RootState) => state.categories)

  return (
    <div className="sm:grid grid-cols-2 lg:grid-cols-3 gap-4 sm:w-3/4 sm:h-4/5 m-4">
      {categories.map((category, key) => (<Category category={category} timeframe={timeframe} key={key} />))}
    </div>
  )
}
