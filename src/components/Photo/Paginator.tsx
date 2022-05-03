import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { photosReducers } from '../../store/reducers/photosReducer'
import './Paginator.css'

const Paginator = () => {

    const {setselectPage} = photosReducers.actions
    const { total_results, per_page, selectPage} = useAppSelector(state => state.photos.foundPhotos)
    let pages: Array<number> = [];
    let pagesCount = Math.ceil(total_results / per_page)
    const [portionNumber, setportionNumber] = useState(1)
    const portionSize = 10

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    };



    const dispatch = useAppDispatch()
    let leftPortionPageNumber = (portionNumber - 1) * (portionSize + 1)
    let rightPortionPageNumber = portionNumber + portionSize

    const onClick = (e: number) => {
        dispatch(setselectPage(e))
    }

    return (
        <div className ="pagination">
            <div className='paginatorNumbers'>&laquo;</div>
            {pages
            .filter(item => item >= leftPortionPageNumber && item < rightPortionPageNumber)
            .map(i => <div key = {i} onClick={() => onClick(i)} className= {selectPage === i ? 'paginationActive' : 'paginatorNumbers'}>{i}</div>)}
            <div className='paginatorNumbers'>&raquo;</div>
        </div>
    )
}

export default Paginator