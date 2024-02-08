import React from 'react'
import type { RootState } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import { addCategories, addCategory } from './categoriesSlice'
import tasksData from '../../data.json';
import { useEffect } from 'react';

export default function Timeframe() {
  //const title = useSelector((state: RootState) => state.timeframe.title)
  const categories = useSelector((state: RootState) => state.categories)
  const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(addCategories(tasksData))
  // }, [dispatch])
  return (
    <div>
      {categories.map((category, key) => (<p>{category.title}</p>))}
      <button onClick={()=>dispatch(addCategory({title: 'test', timeframes: {daily: {current: 0, previous: 0}, weekly: {current: 0, previous: 0}, monthly: {current: 0, previous: 0}}}))}>add category</button>
    </div>
  )
}
