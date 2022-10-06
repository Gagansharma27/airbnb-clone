import React from 'react'
import './SearchPage.css'
import {Button} from '@material-ui/core'
import SearchResult from './SearchResult'

function SearchPage() {
  return (
    <div className='searchPage'>
        <div className='searchPage__info'>
            <p>62 stays - 26 august to 30 august - 2 guests </p>
            <h1>Stays nearby</h1>

                
            <Button variant='outlined'>
                Cancellation Flexibility
            </Button>
            <Button variant='outlined'>
                Type of Place
            </Button>
            <Button variant='outlined'>
                Price
            </Button>
            <Button variant='outlined'>
                Rooms and Beds
            </Button>
            <Button variant='outlined'>
                More Filters
            </Button>

        </div>
        <SearchResult
        img="https://a0.muscache.com/im/pictures/373443ec-b377-4181-b753-3a2f3508c2b3.jpg?im_w=720"
        location='Private room in center of khajuri'
        title="Stay at this spacious Edwardin House"
        description="1 guest - 1 bedroom - 1 bed - 1 washroom - wifi - free parking"
        star = {4.73}
        price = "Rs.500/night"
        total="1117 total"
        />
        <SearchResult
        img="https://a0.muscache.com/im/pictures/373443ec-b377-4181-b753-3a2f3508c2b3.jpg?im_w=720"
        location='Private room in center of khajuri'
        title="Stay at this spacious Edwardin House"
        description="1 guest - 1 bedroom - 1 bed - 1 washroom - wifi - free parking"
        star = {4.73}
        price = "Rs.500/night"
        total="1117 total"
        />
        <SearchResult
        img="https://a0.muscache.com/im/pictures/373443ec-b377-4181-b753-3a2f3508c2b3.jpg?im_w=720"
        location='Private room in center of khajuri'
        title="Stay at this spacious Edwardin House"
        description="1 guest - 1 bedroom - 1 bed - 1 washroom - wifi - free parking"
        star = {4.73}
        price = "Rs.500/night"
        total="1117 total"
        />
        <SearchResult
        img="https://a0.muscache.com/im/pictures/373443ec-b377-4181-b753-3a2f3508c2b3.jpg?im_w=720"
        location='Private room in center of khajuri'
        title="Stay at this spacious Edwardin House"
        description="1 guest - 1 bedroom - 1 bed - 1 washroom - wifi - free parking"
        star = {4.73}
        price = "Rs.500/night"
        total="1117 total"
        />
        <SearchResult
        img="https://a0.muscache.com/im/pictures/373443ec-b377-4181-b753-3a2f3508c2b3.jpg?im_w=720"
        location='Private room in center of khajuri'
        title="Stay at this spacious Edwardin House"
        description="1 guest - 1 bedroom - 1 bed - 1 washroom - wifi - free parking"
        star = {4.73}
        price = "Rs.500/night"
        total="1117 total"
        />
    </div>
  )
}

export default SearchPage